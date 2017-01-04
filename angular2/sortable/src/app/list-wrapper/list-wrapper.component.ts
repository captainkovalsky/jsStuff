import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Observable } from 'rxjs';
import Item from '../item-model';
import { MockItemsApiService } from '../mock-items-api.service';

@Component({
  selector: 'app-list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.css'],
  providers: [ItemsService, MockItemsApiService]
})
export class ListWrapperComponent implements OnInit {
  items: Array<Item> = [];
  private _originalItems: Item[];

  constructor(private itemsSrv: ItemsService) {
    this.itemsSrv.getItems().subscribe((items) => {
      this.items = items;
      this._originalItems = items.slice();
    });
  }

  ngOnInit() {

  }

  isChanged(): boolean {
    return this._originalItems.some((o: Item, i: number) => !o.equals(this.items[i]))
      || this.items.some((item: Item) => item.isChanged());
  }
}
