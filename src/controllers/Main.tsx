import React, {useState} from 'react';
import {MainView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../slices';
import axiosController from '../api/axiosController';
import getTheme from '../animations/theme';

function Main({navigation}) {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const {themeBgStyle, themeFontStyle, _handleAnimation} = getTheme(themeIndex);
  const [loading, setLoading] = useState(false);

  // Theme ==================

  return (
    <MainView
      themeIndex={themeIndex}
      themeBgStyle={themeBgStyle}
      themeFontStyle={themeFontStyle}
      _handleAnimation={_handleAnimation}
      loading={loading}
    />
  );
}

export default Main;
