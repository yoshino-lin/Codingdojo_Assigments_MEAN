import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data_out: any;
    str:any;
    constructor(private _httpService: HttpService){}
    ngOnInit(){
        this.getPokemonInfo();
        this.str="Bind event"
    }
    getPokemonInfo(){
        let observable = this._httpService.getUsers();
        observable.subscribe(data => {
            console.log(data)
            this.data_out=data
        });
    }
}
