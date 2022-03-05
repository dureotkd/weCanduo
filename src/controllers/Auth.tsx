import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login as kakaoLogin,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import React, {useState} from 'react';
import {AuthView} from '../views';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, Animated} from 'react-native';
import {themeSlice} from '../slices';
import getTheme from '../animations/theme';

function Auth({navigation}) {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const {themeBgStyle, themeFontStyle, _handleAnimation} = getTheme(themeIndex);

  // Theme ==================

  const _handleKaKaoOauth = async () => {
    const oauthToken = await getOauthToken();
    const profile = await getKakaoProfile();
  };

  const getOauthToken = async () => {
    try {
      const res = await kakaoLogin();
      return res;
    } catch (e) {
      // Alert.alert('알림', '?');
    }
  };

  return (
    <AuthView
      themeIndex={themeIndex}
      themeBgStyle={themeBgStyle}
      themeFontStyle={themeFontStyle}
      _handleAnimation={_handleAnimation}
      _handleKaKaoOauth={_handleKaKaoOauth}
    />
  );
}

export default Auth;
