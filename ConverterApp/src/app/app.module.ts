import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
