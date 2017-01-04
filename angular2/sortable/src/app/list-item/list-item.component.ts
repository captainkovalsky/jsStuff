import { Component, OnInit, Input } from '@angular/core';
import Item from '../item-model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
