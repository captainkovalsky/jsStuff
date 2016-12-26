import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommonListService {
   private searchChanged = new Subject<string>();
   searchChanged$ = this.searchChanged.asObservable();
   
   
   constructor() { }

}
