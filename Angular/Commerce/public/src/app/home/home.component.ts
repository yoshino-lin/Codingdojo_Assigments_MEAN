import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    all_products_data_dic: any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit(){
        this.getAllProducts()
    }
    getAllProducts(){
      let observable = this._httpService.getProductsInfo();
      observable.subscribe(data => {
          this.all_products_data_dic=data
      });
    }
}
