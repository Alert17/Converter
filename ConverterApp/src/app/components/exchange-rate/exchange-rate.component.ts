import {Component, Input} from '@angular/core';
import {IData} from "../../models/data";


@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent{
  @Input() rates: IData

  getValue() {
    return Number(this.rates.sale).toFixed(2)
  }
}
