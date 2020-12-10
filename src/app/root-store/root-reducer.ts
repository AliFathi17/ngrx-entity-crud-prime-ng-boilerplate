import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {State} from '@root-store/state';
import {environment} from '../../environments/environment';
import {localStorageSync} from 'ngrx-store-localstorage';


// tslint:disable-next-line:no-empty-interface
export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {};
//
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// const reducers: ActionReducerMap<State> = {todos, visibilityFilter};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({rehydrate: true, keys: ['auth']})(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
