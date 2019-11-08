import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data_out: any;
    gold_amount:any;
    events:any;
    constructor(private _httpService: HttpService){}
    ngOnInit(){
        this.gold_amount=0
        this.events=[]
    }
    farm(){
        let amount=Math.floor(Math.random()*(5-2+1)+2);
        this.gold_amount+=amount
        this.events.push("You've earned "+amount+" gold at the farm")
        if(this.events.length>5){
            this.events.reverse()
            this.events.pop()
            this.events.reverse()
        }
    }
    cave(){
        let amount=Math.floor(Math.random()*(10-5+1)+5);
        this.gold_amount+=amount
        this.events.push("You've earned "+amount+" gold at the cave")
        if(this.events.length>5){
            this.events.reverse()
            this.events.pop()
            this.events.reverse()
        }
    }
    casino(){
        let amount=Math.floor(Math.random()*(100+100+1)-100);
        this.gold_amount+=amount
        if(amount>0){
            this.events.push("You've earned "+amount+" gold at the casino")
        }else if(amount=0){
            this.events.push("You've earned nothing at the casino")
        }else{
            amount=0-amount
            this.events.push("You've lost "+amount+" gold at the casino")
        }
        if(this.events.length>5){
            this.events.reverse()
            this.events.pop()
            this.events.reverse()
        }
    }
    house(){
        let amount=Math.floor(Math.random()*(15-7+1)+7);
        this.gold_amount+=amount
        this.events.push("You've earned "+amount+" gold at the house")
        if(this.events.length>5){
            this.events.reverse()
            this.events.pop()
            this.events.reverse()
        }
    }
    loadGame(){
        let observable = this._httpService.loadData();
        observable.subscribe(data => {
            console.log(data)
            this.gold_amount = data[0]["gold"]
        });
    }
    saveGame(){
        let observable = this._httpService.changeGold(10000);
        console.log("succeed")
    }
    createAccount(){
        this._httpService.createData();
        console.log("succeed")
    }
    reset(){
        this.gold_amount=0
        this.events=[]
    }
}
