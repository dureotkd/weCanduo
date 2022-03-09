import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accountId: '',
  userId: '',
  lolId: '',
  name: '',
  profileIconId: 0,
  level: 0,
  wins: 0,
  losses: 0,
  tier: '',
  rank: '',
  searchIng: '',
};

const summonerSlice = createSlice({
  name: 'summoner`',
  initialState,
  reducers: {
    setSummoner(state, action) {
      state.accountId = action.payload.data.accountId;
      state.userId = action.payload.data.userId;
      state.lolId = action.payload.data.lolId;
      state.name = action.payload.data.name;
      state.profileIconId = action.payload.data.profileIconId;
      state.level = action.payload.data.level;
      state.wins = action.payload.data.wins;
      state.losses = action.payload.data.losses;
      state.tier = action.payload.data.tier;
      state.rank = action.payload.data.rank;
    },

    setSearchIng(state, action) {
      state.searchIng = action.payload.searchIng;
    },
  },
  extraReducers: _builder => {},
});

export default summonerSlice;
