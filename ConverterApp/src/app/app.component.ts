import { Component } from '@angular/core';
import {IData} from "./models/data";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConverterApp';
  data: IData[] = []

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getRate().subscribe(data => {
      this.data = data
    })
  }

}
