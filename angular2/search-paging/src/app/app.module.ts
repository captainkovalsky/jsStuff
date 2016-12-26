import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CommonListComponent } from './common-list/common-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CommonListService } from './common-list-service';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CommonListComponent,
    PaginationComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CommonListService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
