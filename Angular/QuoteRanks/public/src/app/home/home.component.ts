import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    all_authors_data_dic: any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit(){
      this.getAllAuthors()
    }
    getAllAuthors(){
      let observable = this._httpService.getAuthorsInfo();
      observable.subscribe(data => {
          this.all_authors_data_dic=data
      });
    }
    deleteTheUser(id){
      let observable = this._httpService.removeAuthor(id);
      observable.subscribe(data => {
          console.log(data)
          this.getAllAuthors()
      });
    }
}
