import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){
        this.getUsers();
    }
    getUsers(){
        return this._http.get('/api');
    }
    getOneUser(id){
        return this._http.get('/api/'+id);
    }
}
