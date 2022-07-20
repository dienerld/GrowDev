import { ActionType } from '../actions-type';

interface IncrementAction {
  type: ActionType.INCREMENT;
  payload: number
}

interface DecrementAction {
  type: ActionType.DECREMENT;
  payload: number
}

export type Action = IncrementAction | DecrementAction;
