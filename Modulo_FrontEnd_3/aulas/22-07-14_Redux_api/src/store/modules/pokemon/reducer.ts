import { Action } from './actions';

const initialState: object = {};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'getPokemon':
      return action.payload;
    default:
      return state;
  }
}
