import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){
        this.getCakesInfo()
    }
    addCake(newCake){
        return this._http.post('/api/createAcake',newCake)
    }
    getCakesInfo(){
        return this._http.get('/api')
    }
    addComment(id,comment){
        return this._http.post('/api/'+id+'/'+comment.star+'/'+comment.content, comment)
    }
    findThatCake(id){
        return this._http.get('/api/'+id)
    }
    findThatBakersCake(name){
        return this._http.get('/api/backer/'+name)
    }
}
