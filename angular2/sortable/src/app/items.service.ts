import { Injectable } from '@angular/core';
import { MockItemsApiService } from './mock-items-api.service';
import { Observable } from 'rxjs';
import Item from './item-model';

@Injectable()
export class ItemsService {

  constructor(private api: MockItemsApiService) {
  }

  public getItems(): Observable<Item[]> {
    return this.api.getItems();
  }

}
