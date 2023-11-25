
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuotesListComponent } from './quotes-list.component';
import { QuotesListRoutingModule } from './quotes-list-routing.module';

@NgModule({
  declarations: [
    QuotesListComponent,
  ],
  imports: [
    BrowserModule,
    QuotesListRoutingModule
  ],
  providers: [],
  bootstrap: [QuotesListComponent]
})
export class QuotesListModule { }
