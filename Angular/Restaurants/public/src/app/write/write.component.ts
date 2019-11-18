import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
    id: any;
    theRestaurant: any;
    newQuoteContent: any;
    erroMessage:any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}

  ngOnInit() {
      this.theRestaurant={name:""}
      this.erroMessage = {customer: "", description:""}
      this.newQuoteContent={customer: "", star:1, description:""}
      this._route.params.subscribe((params: Params) => {
          this.id = params['id']
      });
      this.getName()
  }
  getName(){
      let observable = this._httpService.findTheRestaurant(this.id);
      observable.subscribe(data => {
          this.theRestaurant = data
      });
  }
  createQuote(){
      let observable = this._httpService.newQuotes(this.id,this.newQuoteContent);
      observable.subscribe(data => {
          if(data["errors"]){
              this.erroMessage = data["errors"]
          }else{
              this._router.navigate(['/restaurants/'+this.id]);
          }
      });
      this.erroMessage = {customer: "", description:""}
  }

}
