import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){}
    getAuthorsInfo(){
        return this._http.get('/api')
    }
    newAuthor(name){
        return this._http.post(`/api/${name}`, name)
    }
    removeAuthor(id){
        return this._http.delete(`/api/${id}`)
    }
    updateAuthorName(id,name){
        return this._http.put(`/api/${id}/${name}`, name)
    }
    findThatAuthorName(id){
        return this._http.get(`/api/${id}`)    
    }
}
