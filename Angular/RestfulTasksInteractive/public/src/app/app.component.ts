import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data_out: any;
    title:any;
    des:any;
    constructor(private _httpService: HttpService){}
    ngOnInit(){}
    onButtonClickEvent(){
        let observable = this._httpService.getUsers();
        observable.subscribe(data => {
            this.data_out=data
        });
    }
    showInfo(id:number): void{
        let observable1 = this._httpService.getOneUser(id);
        observable1.subscribe(data => {
            this.title = data.title
            this.des = data.description
        });
    }
}
