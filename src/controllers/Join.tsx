import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {JoinView} from '../views';
import axiosController from '../api/axiosController';
import axios from 'axios';
import {
  privateKey,
  summonerUrl,
  leagueUrl,
  championMasteryUrl,
} from '../api/leagueApi';
import {Alert, ActivityIndicator, View} from 'react-native';
import {userSlice, summonerSlice} from '../slices';
import EncryptedStorage from 'react-native-encrypted-storage';

function Join({route, navigation}) {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [summonerText, setSummonerText] = useState('');
  const {data} = route.params;

  const disabledBtn = summonerText ? false : true;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const getSummoner = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${summonerUrl}${summonerText}`, {
          params: {
            api_key: privateKey,
          },
        })
        .then(({status, data}) => {
          if (status === 200) {
            resolve(data);
          }
        })
        .catch(e => {
          setLoading(false);
          Alert.alert('알림', '존재하지 않는 소환사명입니다..');
          reject();
        });
    });
  };

  const getLeague = async id => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${leagueUrl}${id}`, {
          params: {
            api_key: privateKey,
          },
        })
        .then(({status, data}) => {
          if (status === 200) {
            data.forEach((row, idx) => {
              if (row.queueType === 'RANKED_SOLO_5x5') {
                resolve(row);
              }
            });
          }
        })
        .catch(e => {
          Alert.alert('알림', '존재하지 않는 개인랭크 데이터입니다');
          reject();
        });
    });
  };

  const getChampionMastery = async id => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${championMasteryUrl}${id}`, {
          params: {
            api_key: privateKey,
          },
        })
        .then(({status, data}) => {
          if (status === 200) {
            resolve(data);
          }
        })
        .catch(e => {
          Alert.alert('알림', '존재하지 않는 개인랭크 데이터입니다');
          setLoading(false);
          reject();
        });
    });
  };

  /**
   *
   */
  const _handleSummoner = async () => {
    setLoading(true);

    // 소환사 정보 호출
    const {
      accountId,
      id,
      name,
      profileIconId,
      puuid,
      revisionDate,
      summonerLevel,
    } = await getSummoner();

    // 소환사 랭크전적 호출
    const {losses, wins, rank, tier} = await getLeague(id);

    // 소환사 챔피언 숙련도 호출
    const championMastery = await getChampionMastery(id);

    // 소환사 정보 DB 저장
    try {
      await axiosController({
        method: 'post',
        url: '/users',
        data: {
          userData: data,
          accountId,
          id,
          name,
          profileIconId,
          puuid,
          revisionDate,
          summonerLevel,
          wins,
          losses,
          rank,
          tier,
          championMastery,
        },
      });

      await EncryptedStorage.setItem('accessToken', data.accessToken);
      dispatch(
        userSlice.actions.setAccessToken({
          accessToken: data.accessToken,
        }),
      );
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <JoinView
      _handleSummoner={_handleSummoner}
      setSummonerText={setSummonerText}
      disabledBtn={disabledBtn}
      navigation={navigation}
      loading={loading}
      inputRef={inputRef}
    />
  );
}
export default Join;
