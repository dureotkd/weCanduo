import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  flag: 0,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.flag = action.payload.theme;
    },
  },

  extraReducers: _builder => {},
});

export default themeSlice;
