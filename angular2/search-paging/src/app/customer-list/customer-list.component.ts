import { Component, OnInit } from '@angular/core';
import { CommonListService } from '../common-list-service';
import { ProductsService } from '../products.service';

import { Observable } from 'rxjs';


class Pagination {

}


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private tokens: string[];

  private items: any[];

  private pagination = new Pagination();


  constructor(private commonListService: CommonListService,
  private productsService: ProductsService) { }

  ngOnInit() {
      this.search('');
  }

  search(value) {
    this.tokens = value.split(',').map(v => v.trim()).filter(v => v !== '');
        this.productsService.find(this.tokens).subscribe((items) => {
      this.items = items;
    });
  }

  getItems() {
    return this.items || [];
  }

}
