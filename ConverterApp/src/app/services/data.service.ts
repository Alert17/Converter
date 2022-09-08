import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {IData} from "../models/data";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) {
    }

    getRate(): Observable<IData[]>{
        return this.http.get<IData[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').pipe(
          map(x => x.slice(0, 2)))
    }
}
