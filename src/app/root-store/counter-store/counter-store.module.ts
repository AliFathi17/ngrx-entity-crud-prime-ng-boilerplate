import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CounterStoreEffects} from './effects';
import {featureReducer} from './reducer';
import {Counter} from '@models/vo/counter';
import {Names} from './names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<Counter>>(`${Names.NAME}-store Reducers`);

// @ts-ignore
// @ts-ignore
@NgModule({
  // tslint:disable-next-line:indent
	imports: [
    // tslint:disable-next-line:indent
		CommonModule,
    // tslint:disable-next-line:indent
		StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
    // tslint:disable-next-line:indent
		EffectsModule.forFeature([CounterStoreEffects]),
    // tslint:disable-next-line:indent
	],
  // tslint:disable-next-line:indent
	declarations: [],
  // tslint:disable-next-line:indent
	providers: [CounterStoreEffects,
    // tslint:disable-next-line:indent
		{
      // tslint:disable-next-line:indent
			provide: INJECTION_TOKEN,
      // tslint:disable-next-line:indent
			useFactory: (): ActionReducer<Counter> => featureReducer

      // tslint:disable-next-line:indent
		}]
})
export class CounterStoreModule {
}
