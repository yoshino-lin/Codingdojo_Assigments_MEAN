import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    newRestaurant: any;
    erroMessage:any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit() {
        this.erroMessage = { name: {message:""}, cuisine:{message:""}}
        this.newRestaurant = { name: "", cuisine:""}
    }
    createRestaurant(){
        let observable1 = this._httpService.findTheRestaurantWithName(this.newRestaurant.name)
        observable1.subscribe((data:any) => {
            if(data.length>0){
                this.erroMessage.name.message = "Name has to be unique"
            }else{
                let observable = this._httpService.newRestaurant(this.newRestaurant)
                observable.subscribe(data => {
                    if(data["errors"]){
                        this.erroMessage = data["errors"]
                    }else{
                        this._router.navigate(['/restaurants'])
                    }
                })
            }
        })
        this.erroMessage = { name: {message:""}, cuisine:{message:""}}
    }
    goHome(){
        this._router.navigate(['/restaurants']);
    }
}
