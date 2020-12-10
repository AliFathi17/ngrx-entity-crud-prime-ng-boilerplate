import {createAction, props} from '@ngrx/store';

export enum ActionTypes {
  // CHANGE_A = '[Counter] Change A',
  // CHANGE_B = '[Counter] Change b',
  INCREMENT = '[Counter] increment',
  DECREMENT = '[Counter] decrement',
  RESET = '[Counter] reset',
  CHANGE_B = '[Counter] Change b',
}

// export const ChangeA = createAction(ActionTypes.CHANGE_A, props<{ valueA: string }>());
// export const ChangeB = createAction(ActionTypes.CHANGE_B, props<{ valueB: string }>());
export const Increment = createAction(ActionTypes.INCREMENT);
export const Decrement = createAction(ActionTypes.DECREMENT);
export const Reset = createAction(ActionTypes.RESET);
export const ChangeB = createAction(ActionTypes.CHANGE_B, props<{ valueB: string }>());
