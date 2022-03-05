import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {JoinView} from '../views';
import getTheme from '../animations/theme';

function Join({navigation}) {
  const dispatch = useDispatch();
  // Theme ==================
  const themeIndex = useSelector(state => state.theme.flag);
  const {themeBgStyle, themeFontStyle, _handleAnimation} = getTheme(themeIndex);
  // Theme ==================

  const [summonerText, setSummonerText] = useState('');
  const disabledBtn = summonerText ? false : true;

  /**
   *
   */
  const _handleSummoner = () => {
    console.log(summonerText);
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
    />
  );
}
export default Join;
