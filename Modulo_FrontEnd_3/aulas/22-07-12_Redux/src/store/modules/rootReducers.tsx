import { combineReducers } from 'redux';
import { countReducer } from './count/reducers';

export const reducers = combineReducers({
  count: countReducer,
});

export type State = ReturnType<typeof reducers>
