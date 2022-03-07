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
import EncryptedStorage from 'react-native-encrypted-storage';

function Auth({navigation}) {
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

      setLoading(false);

      navigation.navigate('Join', {data});
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
      console.log(`kakaoProfile ${e}`);
      return false;
    }
  };

  return <AuthView _handleKaKaoOauth={_handleKaKaoOauth} loading={loading} />;
}

export default Auth;
