import {createSlice} from '@reduxjs/toolkit';

const initialState = {
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
    setUser(state, action) {
      state.email = action.payload.data.email;
      state.nickname = action.payload.data.nickname;
      state.profileImageUrl = action.payload.data.profileImageUrl;
      state.refreshToken = action.payload.data.refreshToken;
      state.accessToken = action.payload.data.accessToken;
    },
  },
  extraReducers: _builder => {},
});

export default userSlice;
