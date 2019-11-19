import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    newProduct: any;
    erroMessage:any;
    id:any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit() {
        this.erroMessage = { name: {message:""}, qty:{message:""}, price:{message:""}, index:{message:""}}
        this.newProduct = { name: "", qty:-1, price:-1, index:-1}
        this._route.params.subscribe((params: Params) => {
            this.id = params['id']
        });
        this.getThisProductInfo()
    }
    getThisProductInfo(){
        let observable = this._httpService.findTheProduct(this.id);
        observable.subscribe(data => {
            this.newProduct = data
        });
    }
    updateThisProduct(){
        let observable = this._httpService.updateTheProduct(this.id,this.newProduct);
        observable.subscribe(data => {
            if(data["errors"]){
                console.log(data)
                this.erroMessage = data["errors"]
            }else{
                this._router.navigate(['/products'])
            }
        })
    }
    check_is_true(){
        if(this.newProduct.name.length<3 || this.newProduct.price<-1 || this.newProduct.qty<0 || this.newProduct.price=="" || this.newProduct.qty==""){
            return false
        }else{
            return true
        }
    }
}
