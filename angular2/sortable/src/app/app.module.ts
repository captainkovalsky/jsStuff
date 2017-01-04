import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListWrapperComponent } from './list-wrapper/list-wrapper.component';
import { DndModule } from 'ng2-dnd';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
