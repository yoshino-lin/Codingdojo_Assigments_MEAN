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
        return this._http.post(`/api/newAuthor`, name)
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
    newQuotes(id,content){
        return this._http.post(`/quotes/${id}`, content)
    }
    increaseVote(author_uid,quotes_id){
        return this._http.put(`/quotes/up/${author_uid}/${quotes_id}`,author_uid)
    }
    decreaseVote(author_uid,quotes_id){
        return this._http.put(`/quotes/down/${author_uid}/${quotes_id}`,author_uid)
    }
    deleteVote(author_uid,quotes_id){
        return this._http.delete(`/quotes/${author_uid}/${quotes_id}`)
    }
}
