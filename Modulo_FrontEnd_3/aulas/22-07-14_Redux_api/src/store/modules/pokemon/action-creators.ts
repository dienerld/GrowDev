import { Dispatch } from 'redux';
import { Action } from './actions';

export const getPokemon = (value: string|number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: 'getPokemon',
    payload: value,
  });
};
