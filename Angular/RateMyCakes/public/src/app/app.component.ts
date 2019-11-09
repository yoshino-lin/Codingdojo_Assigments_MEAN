import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    newCake: any;
    data: any;
    constructor(private _httpService: HttpService){}
    ngOnInit(){
        this.newCake = { baker: "", img_url: "" }
    }
    createCake(){
        let observable = this._httpService.addCake(this.newCake);
        observable.subscribe(data => {
            console.log("Got the data back from post",data)
            this.newCake = { baker: "", img_url: "" }
        });
    }
}
