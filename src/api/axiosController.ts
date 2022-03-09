import axios from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';

const timeout = 2500;
const instance = axios.create({
  baseURL: `http://192.168.35.217:8090/api`,
  // baseURL: `http://10.0.2.16:8090/api`,
  // baseURL: `http://127.0.0.1:8090/api`,
  // baseURL: `http://10.0.2.15:8090/api`,
  timeout: timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉션 추
instance.interceptors.request.use(
  // 요청 보내기 전  수행로직
  config => {
    return config;
  },

  // 요청 에러 발생시 수행로직
  error => {
    Alert.alert('알림', 'REQUEST ERROR 발생');

    return Promise.reject(error);
  },
);

// 응답 인터셉션 추
instance.interceptors.response.use(
  // 응답 로직 생성
  response => {
    console.log('응답 로직 생성');

    return response;
  },

  // 응답 에러
  error => {
    Alert.alert('알림', 'RESPONESE ERROR 발생');

    return Promise.reject(error);
  },
);

export default instance;
