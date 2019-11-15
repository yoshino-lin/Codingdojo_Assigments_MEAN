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
    author_data: any;
    newQuoteContent: any;
    erroMessage:string;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}

  ngOnInit() {
      this.author_data={name:""}
      this._route.params.subscribe((params: Params) => {
          this.id = params['id']
      });
      this.newQuoteContent={content:""}
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
  createQuote(){
      let observable = this._httpService.newQuotes(this.id,this.newQuoteContent.content);
      observable.subscribe(data => {
          if(data["errors"]){
              this.erroMessage = data["errors"]["content"]["message"]
          }else{
              this._router.navigate(['/quotes/'+this.id]);
          }
      });
  }

}
