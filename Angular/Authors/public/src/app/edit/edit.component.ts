import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    newAuthorName: any;
    erroMessage:string
    id: any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit() {
        this.erroMessage=null
        this.newAuthorName = { name: "" }
        this._route.params.subscribe((params: Params) => {
            this.id = params['id']
        });
        this.getName()
    }
    updateAuthor(){
        let observable = this._httpService.updateAuthorName(this.id,this.newAuthorName.name);
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
    getName(){
        let observable = this._httpService.findThatAuthorName(this.id);
        observable.subscribe(data => {
            this.newAuthorName.name = data.name
        });
    }
}
