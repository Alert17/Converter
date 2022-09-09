import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {IData} from "../../models/data";
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnChanges {

  @Input() rates: IData[] = []

  title = 'currency converter'

  arrOfCurrencies: any = []

  currencyName: string
  currencyName2: string
  currencyValue: string
  currencyValue2: string

  ngOnChanges() {
    this.arrOfCurrencies = this.getAllCurrencies()
  }

  getAllCurrencies() {
    let arr = ["UAH"]
    for (let i = 0; i < this.rates.length; i++)
      arr.push(this.rates[i].ccy)
    return arr
  }

  changeValue(isFirst: boolean) {
    if (isFirst)
      this.currencyValue2 = this.calcValue(this.currencyName, this.currencyName2, this.currencyValue, this.rates)
    else
      this.currencyValue = this.calcValue(this.currencyName2, this.currencyName, this.currencyValue2, this.rates)
  }

  calcValue(from: string, to: string, val: string, rates: IData[]) {
    let num = Number(val)
    let fromFactor: number = 0
    let toFactor: number = 0
    for (let i = 0; i < rates.length; i++) {
      if (from === this.rates[i].ccy)
        fromFactor = Number(this.rates[i].sale)
    }
    fromFactor = fromFactor ? fromFactor : 1

    for (let i = 0; i < rates.length; i++) {
      if (to === this.rates[i].ccy)
        toFactor = Number(this.rates[i].sale)
    }

    toFactor = toFactor ? toFactor : 1
    return String((num * fromFactor / toFactor).toFixed(2))
  }

}

