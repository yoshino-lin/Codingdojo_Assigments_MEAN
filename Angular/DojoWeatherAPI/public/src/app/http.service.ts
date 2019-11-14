import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){}
    getWeather(location:string){
        return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=bb50c9e8a8d074e18194bda4b7f700fc`);
    }
}
