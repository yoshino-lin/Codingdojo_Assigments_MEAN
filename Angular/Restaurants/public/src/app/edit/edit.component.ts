import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    newRestaurant: any;
    erroMessage:any;
    @Input() uid: any;
    @Output() aTaskEventEmitter = new EventEmitter();
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit() {
        this.erroMessage = { name: "", cuisine:""}
        this.newRestaurant = { name: "", cuisine:""}
        this.getName()
    }
    updateRestaurant(){
        let observable = this._httpService.updateRestaurant(this.uid,this.newRestaurant);
        observable.subscribe(data => {
            if(data["errors"]){
                this.erroMessage = data["errors"]
            }else{
                this.triggerEvent()
            }
        });
        this.erroMessage = { name: "", cuisine:""}
    }
    goHome(){
        this.uid=null;
    }
    getName(){
        let observable = this._httpService.findTheRestaurant(this.uid);
        observable.subscribe(data => {
            this.newRestaurant = data
        });
    }
    triggerEvent(){
       this.aTaskEventEmitter.emit();
   }
}
