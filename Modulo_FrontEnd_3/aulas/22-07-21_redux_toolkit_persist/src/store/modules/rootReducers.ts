import { combineReducers } from 'redux';
import { counterReducers } from './counter/counterSlice';
import { profileReducers } from './profile/profileSlice';
import { userReducers } from './user/userSlice';

export const rootReducers = combineReducers({
  counter: counterReducers,
  profile: profileReducers,
  user: userReducers,
});
