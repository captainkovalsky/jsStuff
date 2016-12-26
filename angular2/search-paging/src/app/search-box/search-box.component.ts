import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
 @Output() searchChanged = new EventEmitter();

 private tokens: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.searchChanged.emit(value);
  }

}
