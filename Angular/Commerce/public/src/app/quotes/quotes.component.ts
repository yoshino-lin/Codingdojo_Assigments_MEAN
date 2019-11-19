import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    id: any;
    newProduct: any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}

  ngOnInit() {
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
  deleteProduct(){
      let observable = this._httpService.removeProduct(this.id);
      observable.subscribe(data => {
          console.log(data)
          this._router.navigate(['/products']);
      });
  }
  goHome(){
      this._router.navigate(['/products']);
  }
}
