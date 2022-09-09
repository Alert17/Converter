import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { ConverterComponent } from './components/converter/converter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    ConverterComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
