import { Dispatch } from 'redux';
import { Action } from './actions';
import { ActionType } from '../actions-types';

export const incrementCount = (value: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.INCREMENT,
    payload: value,
  });
};

export const decrementCount = (value: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.DECREMENT,
    payload: value,
  });
};
