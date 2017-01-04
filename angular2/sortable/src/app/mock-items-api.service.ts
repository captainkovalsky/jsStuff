import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Item from './item-model';

@Injectable()
export class MockItemsApiService {

  constructor() { }

  public getItems(): Observable<Item[]> {
    return Observable.of([
      new Item('one'),
      new Item('two'),
      new Item('three')
    ]);
  }

}
