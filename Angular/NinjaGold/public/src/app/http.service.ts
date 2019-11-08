import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){}
    loadData(){
        return this._http.get('/gold');
    }
    changeGold(amount){
        return this._http.post('/gold/'+amount);
    }
    createData(){
        this._http.get('/new')
    }
}
