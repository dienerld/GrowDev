import { combineReducers } from 'redux';
import { counterReducers } from './counter/counterSlice';
import { profileReducers } from './profile/profileSlice';

export const rootReducers = combineReducers({
  counter: counterReducers,
  profile: profileReducers,
});
