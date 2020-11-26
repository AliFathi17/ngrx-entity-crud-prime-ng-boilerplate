import {Injectable} from '@angular/core';
import {Coin} from '@models/vo/coin';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
  // tslint:disable-next-line:indent
	providedIn: 'root'
})
export class CoinService extends BaseCrudService<Coin> {
  // tslint:disable-next-line:indent
	public service = environment.webServiceUri + 'coin';
}
