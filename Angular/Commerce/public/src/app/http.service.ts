import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){}
    getProductsInfo(){
        return this._http.get('/api')
    }
    removeProduct(id){
        return this._http.delete(`/api/${id}`)
    }
    newProduct(data){
        return this._http.post(`/api/newProduct`, data)
    }
    findTheProduct(id){
        return this._http.get(`/api/${id}`)
    }
    updateTheProduct(id,data){
        return this._http.put(`/api/${id}`, data)
    }
}
