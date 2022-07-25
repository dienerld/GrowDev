import { combineReducers } from 'redux';
import { counterSlice } from './counterSlice';

export const rootReducers = combineReducers({
  counter: counterSlice,
});

export type StatesRedux = ReturnType<typeof rootReducers>;
