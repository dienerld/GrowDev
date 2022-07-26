import { combineReducers } from 'redux';
import { counterReducers } from './counter/counterSlice';
import { profileReducers } from './profile/profileSlice';
import { userReducers } from './user/userSlice';
import { productsReducers } from './products/productsSlice';

export const rootReducers = combineReducers({
  counter: counterReducers,
  profile: profileReducers,
  user: userReducers,
  products: productsReducers,
});

export type RootState = ReturnType<typeof rootReducers>;
