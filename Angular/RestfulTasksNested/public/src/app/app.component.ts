import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data: any;
    data_out:any;
    constructor(private _httpService: HttpService){}
    ngOnInit(){}
    onButtonClickEvent(){
        let observable = this._httpService.getUsers();
        observable.subscribe(data => {
            this.data=data
        });
    }
    taskToShow(task:any): void{
        let observable1 = this._httpService.getOneTask(task._id);
        observable1.subscribe(data => {
            this.data_out=data
        });
    }
}
