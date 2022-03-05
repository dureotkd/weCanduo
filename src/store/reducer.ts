import {combineReducers} from 'redux';
import {themeSlice, userSlice} from '../slices';
const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
