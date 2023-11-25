
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QuoteComponent } from './quote.component';
import { QuoteRoutingModule } from './quote-routing.module';

@NgModule({
  declarations: [
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    QuoteRoutingModule
  ],
  providers: [],
  bootstrap: [QuoteComponent]
})
export class QuoteModule { }
