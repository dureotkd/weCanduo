import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {JoinView} from '../views';
import getTheme from '../animations/theme';
import axiosController from '../api/axiosController';
function Join({route, navigation}) {
  const dispatch = useDispatch();
  // Theme ==================
  const themeIndex = useSelector(state => state.theme.flag);
  const {themeBgStyle, themeFontStyle, _handleAnimation} = getTheme(themeIndex);
  // Theme ==================

  const [summonerText, setSummonerText] = useState('');
  const {data} = route.params;

  const disabledBtn = summonerText ? false : true;

  /**
   *
   */
  const _handleSummoner = async () => {
    // await axiosController({
    //   method: 'post',
    //   url: '/users',
    //   data: data,
    // });
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
    />
  );
}
export default Join;
