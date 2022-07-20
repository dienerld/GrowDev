import { ActionType } from '../actions-types';
import { Action } from './actions';

const initialState = 0;

export function countReducer(action: Action, state = initialState) {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + action.payload;
    case ActionType.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}
