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
    author_data: any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}

  ngOnInit() {
      this.author_data = { quotes: [] };
      this._route.params.subscribe((params: Params) => {
          this.id = params['id']
      });
      this.getName()
  }
  getName(){
      let observable = this._httpService.findThatAuthorName(this.id);
      observable.subscribe(data => {
          if(data["name"]=="CastError"){
              this._router.navigate(['/erro']);
          }else{
              this.author_data = data
          }
      });
  }
  viewUp(id){
      let observable = this._httpService.increaseVote(this.id,id);
      observable.subscribe(data => {
          this.getName()
      });
  }
  viewDown(id){
      let observable = this._httpService.decreaseVote(this.id,id);
      observable.subscribe(data => {
           this.getName()
      });
  }
  deleteVote(id){
      let observable = this._httpService.deleteVote(this.id,id);
      observable.subscribe(data => {
           this.getName()
      });
  }
}
