import React, {useState} from 'react';
import {MainView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice, summonerSlice} from '../slices';
import axiosController from '../api/axiosController';

function Main({navigation}) {
  const dispatch = useDispatch();
  const summoner = useSelector(state => {
    console.log(state);
  });

  const [loading, setLoading] = useState(false);

  // Theme ==================

  return <MainView loading={loading} summoner={summoner} />;
}

export default Main;
