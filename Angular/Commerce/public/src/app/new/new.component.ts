import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    newProduct: any;
    erroMessage:any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit() {
        this.newProduct = { name: "", qty:"", price:"", index:-1}
        this.erroMessage = { name: {message:""}, qty:{message:""}, price:{message:""}, index:{message:""}}
        this.createProduct()
    }
    createProduct(){
        let observable1 = this._httpService.getProductsInfo()
        observable1.subscribe((arr:any) => {
            if(arr.length>0){
                for(var i=0;i<arr.length;i++){
                    for(var a=i+1;a<arr.length;a++){
                        if(arr[i]["index"]<arr[a]["index"]){
                            [arr[i],arr[a]]=[arr[a],arr[i]]
                        }
                    }
                }
                this.newProduct["index"] = arr[0]["index"]+1
            }else{
                this.newProduct["index"] = 0
            }
            let observable = this._httpService.newProduct(this.newProduct)
            observable.subscribe(data => {
                if(data["errors"]){
                    console.log(data["errors"])
                    this.erroMessage = data["errors"]
                }else{
                    this._router.navigate(['/products'])
                }
            })
        })
        this.erroMessage = { name: {message:""}, qty:{message:""}, price:{message:""}, index:{message:""}}
    }
    reset(){
        this.newProduct = { name: "", qty:"", price:"", index:-1}
    }
}
