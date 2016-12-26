import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
 @Input() itemsCount: number;
 @Input() perPage: number;

 private pages: String[];

  constructor() { }

  ngOnInit() {
    this.pages = Array.from(new Array(Math.floor(this.itemsCount / this.perPage)), (x, i) => `Page ${i + 1}`);
  }

}
