import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.css']
})
export class CommonListComponent implements OnInit {
 @Input() items: any[];
  constructor() { }

  ngOnInit() {
  }

}
