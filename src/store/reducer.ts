import {combineReducers} from 'redux';
import {themeSlice, userSlice, summonerSlice} from '../slices';
const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  user: userSlice.reducer,
  summoner: summonerSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
