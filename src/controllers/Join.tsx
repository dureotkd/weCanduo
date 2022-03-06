import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {JoinView} from '../views';
import getTheme from '../animations/theme';
import axiosController from '../api/axiosController';
import axios from 'axios';
import {
  privateKey,
  summonerUrl,
  leagueUrl,
  championMasteryUrl,
} from '../api/leagueApi';
import {Alert, ActivityIndicator} from 'react-native';
import {empty} from '../assets/defaut';

function Join({route, navigation}) {
  const dispatch = useDispatch();
  // Theme ==================
  const themeIndex = useSelector(state => state.theme.flag);
  const [loading, setLoading] = useState(false);
  const {themeBgStyle, themeFontStyle, _handleAnimation} = getTheme(themeIndex);
  // Theme ==================

  const [summonerText, setSummonerText] = useState('');
  const {data} = route.params;

  const disabledBtn = summonerText ? false : true;

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
          Alert.alert('알림', '존재하지 않는 소환사명입니다');
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

    setLoading(false);
  };

  return (
    <JoinView
      themeIndex={themeIndex}
      _handleAnimation={_handleAnimation}
      themeBgStyle={themeBgStyle}
      themeFontStyle={themeFontStyle}
      _handleSummoner={_handleSummoner}
      setSummonerText={setSummonerText}
      disabledBtn={disabledBtn}
      navigation={navigation}
      loading={loading}
    />
  );
}
export default Join;
