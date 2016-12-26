import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ProductsService {

  constructor() { }

  public find(tokens: String[]):Observable<String[]> {
    if (tokens.length === 0) {
      return Observable.of(Array.from(new Array(100), (x, i) => `Product ${i + 1}`))
    }
    
    return Observable.of([
      'filtered first',
      'filtered second'
    ]);
  }

}
