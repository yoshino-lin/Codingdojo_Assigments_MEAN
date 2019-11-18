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
    theRestaurant: any;
    theRestaurant_quote:any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}

  ngOnInit() {
      this.theRestaurant = { name:"",customer:"",star:"",description:""};
      this._route.params.subscribe((params: Params) => {
          this.id = params['id']
      });
      this.getName()
      this.findSortQoutes()
  }
  getName(){
      let observable = this._httpService.findTheRestaurant(this.id);
      observable.subscribe(data => {
          this.theRestaurant = data
      });
  }
  findSortQoutes(){
      let observable = this._httpService.findTheQoutes(this.id);
      observable.subscribe((arr:any) => {
          for(var i=0;i<arr.length;i++){
              for(var a=i+1;a<arr.length;a++){
                  if(arr[i]["star"]<arr[a]["star"]){
                      [arr[i],arr[a]]=[arr[a],arr[i]]
                  }
              }
          }
          this.theRestaurant_quote = arr
      });
  }
}
