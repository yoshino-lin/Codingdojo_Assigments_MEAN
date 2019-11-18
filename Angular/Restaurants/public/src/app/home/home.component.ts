import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    all_restaurants_data_dic: any;
    localtime: any;
    restaurant_edit_id:any;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
    ) {}
    ngOnInit(){
        this.restaurant_edit_id=null
        this.getAllRestaurants()
    }
    getAllRestaurants(){
      let observable = this._httpService.getRestaurantsInfo();
      observable.subscribe(data => {
          console.log(data)
          this.all_restaurants_data_dic=data
      });
    }
    deleteTheRestaurant(id){
      let observable = this._httpService.removeRestaurant(id);
      observable.subscribe(data => {
          this.getAllRestaurants()
      });
    }
    dataFromChild(){
        this.restaurant_edit_id=null
        this.getAllRestaurants()
     }
    editTheRestaurant(id){
        this.restaurant_edit_id=id
    }
    timecount(createdAt){
        var time_now = new Date()
        var time_create = new Date(createdAt)
        var time_dif = time_now.getTime() - time_create.getTime()
        if(time_dif>30000){
            return true
        }else{
            return false
        }
    }
}
