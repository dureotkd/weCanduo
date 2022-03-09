import React, {useState} from 'react';
import {MainView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice, summonerSlice} from '../slices';
import axiosController from '../api/axiosController';
import {Alert} from 'react-native';
import axios from 'axios';

function Main({navigation}) {
  const dispatch = useDispatch();
  const summoner = useSelector(state => {
    return state.summoner;
  });

  const searchPositionDefault = ['TOP', 'JUNGLE', 'MIDDLE', 'ADC', 'SUPPORT'];
  const [loading, setLoading] = useState(false);
  const [preferPosition, setPreferPosition] = useState('');
  const [myPosition, setMyPosition] = useState('');
  const [disabled, setDisabled] = useState(summoner.searchIng);

  const _handleSearchGame = async () => {
    try {
      await axiosController({
        method: 'post',
        url: '/search',
        data: {
          preferPosition,
          myPosition,
          userSeq: summoner.userSeq,
        },
      });

      dispatch(
        summonerSlice.actions.setSearchIng({
          searchIng: true,
        }),
      );
    } catch (error) {
    } finally {
      setLoading(true);
    }
  };

  const _cancelSearchGame = async () => {
    try {
      await axiosController({
        method: 'delete',
        url: '/search',
        data: {
          userSeq: summoner.userSeq,
        },
      });

      dispatch(
        summonerSlice.actions.setSearchIng({
          searchIng: false,
        }),
      );
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainView
      loading={loading}
      summoner={summoner}
      setPreferPosition={setPreferPosition}
      setMyPosition={setMyPosition}
      searchPositionDefault={searchPositionDefault}
      _handleSearchGame={_handleSearchGame}
      _cancelSearchGame={_cancelSearchGame}
    />
  );
}

export default Main;
