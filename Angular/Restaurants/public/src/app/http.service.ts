import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){}
    getRestaurantsInfo(){
        return this._http.get('/api')
    }
    newRestaurant(data){
        return this._http.post(`/api/newAuthor`, data)
    }
    removeRestaurant(id){
        return this._http.delete(`/api/${id}`)
    }
    updateRestaurant(id,data){
        return this._http.put(`/api/${id}`, data)
    }
    findTheRestaurant(id){
        return this._http.get(`/api/${id}`)
    }
    newQuotes(id,content){
        return this._http.post(`/quotes/${id}`, content)
    }
    findTheQoutes(id){
        return this._http.get(`/quotes/sort/${id}`)
    }
    findTheRestaurantWithName(name){
        return this._http.get(`/api/goCheckName/${name}`)
    }
}
