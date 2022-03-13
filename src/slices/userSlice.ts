import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  email: '',
  nickname: '',
  profileImageUrl: '',
  refreshToken: '',
  accessToken: '',
};

const userSlice = createSlice({
  name: 'user`',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    setUser(state, action) {
      state.email = action.payload.data.email;
      state.nickname = action.payload.data.nickname;
      state.profileImageUrl = action.payload.data.profileImageUrl;
      state.refreshToken = action.payload.data.refreshToken;
      state.accessToken = action.payload.data.accessToken;
      state.id = action.payload.data.id;
    },
  },
  extraReducers: _builder => {},
});

export default userSlice;
