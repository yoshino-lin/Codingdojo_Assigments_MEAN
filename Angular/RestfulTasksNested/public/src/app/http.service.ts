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
    addTask(newtask){
        return this._http.post('/api/'+newtask.title+"/"+newtask.description)
    }
    updateOne(id,newtask){
        return this._http.put('/api/'+id+"/"+newtask.title+"/"+newtask.description)
    }
    removeTheTask(id){
        return this._http.delete('/api/'+id);
    }
    getOneTask(id){
        return this._http.get('/api/'+id);
    }
}
