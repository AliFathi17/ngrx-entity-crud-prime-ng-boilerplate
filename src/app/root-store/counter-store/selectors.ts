import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {Names} from './names';
import {Counter} from '@models/vo/counter';

// const getValueA = (state: Counter): string => state.valueA;
// const getValueB = (state: Counter): string => state.valueB;
const getQuantity = (state: Counter): number => state.quantity;

export const selectState: MemoizedSelector<object, Counter> = createFeatureSelector<Counter>(Names.NAME);

// export const selectValueA: MemoizedSelector<object, string> = createSelector(
//   selectState,
//   getValueA
// );
//
// export const selectValueB: MemoizedSelector<object, string> = createSelector(
//   selectState,
//   getValueB
// );

export const selectQuantity: MemoizedSelector<object, number> = createSelector(
  selectState,
  getQuantity
);
