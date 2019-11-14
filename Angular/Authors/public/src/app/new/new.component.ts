import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    newAuthorName: any;
    erroMessage:string
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit() {
        this.erroMessage=null
        this.newAuthorName = { name: "" }
    }
    createAuthor(){
        let observable = this._httpService.newAuthor(this.newAuthorName);
        observable.subscribe(data => {
            if(data["errors"]){
                this.erroMessage = data["errors"]["name"]["message"]
            }else{
                this._router.navigate(['/']);
            }
        });
    }
    goHome(){
        this._router.navigate(['/']);
    }
}
