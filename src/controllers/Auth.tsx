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
import {userSlice} from '../slices';
import axiosController from '../api/axiosController';
import getTheme from '../animations/theme';
import EncryptedStorage from 'react-native-encrypted-storage';

function Auth({navigation}) {
  const dispatch = useDispatch();
  const themeIndex = useSelector(state => state.theme.flag);
  const {themeBgStyle, themeFontStyle, _handleAnimation} = getTheme(themeIndex);

  const [loading, setLoading] = useState(false);

  // Theme ==================

  const _handleKaKaoOauth = async () => {
    setLoading(true);

    const tokenData = await getOauthTokenData();
    const profile = await getKaKaoProfileData();

    if (tokenData) {
      const {
        accessToken,
        refreshToken,
        accessTokenExpiresAt,
        refreshTokenExpiresAt,
      } = tokenData;
      const {nickname, profileImageUrl, email} = profile;

      const data = {
        nickname,
        profileImageUrl,
        email,
        accessToken,
        refreshToken,
        accessTokenExpiresAt,
        refreshTokenExpiresAt,
      };

      axiosController({
        method: 'post',
        url: '/users',
        data: data,
      });

      EncryptedStorage.setItem('accessToken', accessToken);

      dispatch(
        userSlice.actions.setUser({
          data,
        }),
      );
    } else {
      setLoading(false);
    }
  };

  const getOauthTokenData = async () => {
    try {
      const res = await kakaoLogin();
      return res;
    } catch (e) {
      console.log(`oauth ${e}`);
      return false;
    }
  };

  const getKaKaoProfileData = async () => {
    try {
      const res = await getKakaoProfile();
      return res;
    } catch (e) {
      return e;
    }
  };

  return (
    <AuthView
      themeIndex={themeIndex}
      themeBgStyle={themeBgStyle}
      themeFontStyle={themeFontStyle}
      _handleAnimation={_handleAnimation}
      _handleKaKaoOauth={_handleKaKaoOauth}
      loading={loading}
    />
  );
}

export default Auth;
