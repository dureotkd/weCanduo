import {combineReducers} from 'redux';
import {themeSlice} from '../slices';
const rootReducer = combineReducers({
  theme: themeSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
