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
    all_cakes: any;
    comment: any;
    theCake: any;
    avg: number;
    the_baker: string;
    constructor(private _httpService: HttpService){}
    ngOnInit(){
        this.getAllCakes()
        this.newCake = { baker: "", img_url: ""}
        this.comment = { star: 5, content: "Type your comment here"}
    }
    getAllCakes(){
        let observable = this._httpService.getCakesInfo();
        observable.subscribe(data => {
            this.all_cakes = data
        });
    }
    createCake(){
        let observable = this._httpService.addCake(this.newCake);
        observable.subscribe(data => {
            this.newCake = { baker: "", img_url: "" }
            this.getAllCakes()
        });
    }
    createComment(id){
        let observable = this._httpService.addComment(id,this.comment);
        observable.subscribe(data => {
            this.comment = { star: 5, content: "Type your comment here"}
            this.displayTheCake(id)
        });
    }
    displayTheCake(id){
        let observable = this._httpService.findThatCake(id);
        observable.subscribe(data => {
            var total = 0
            for(var i=0;i<data["comment"].length;i++){
                total += data["comment"][i].star
            }
            this.theCake = data
            this.avg = total/data["comment"].length
        });
    }
    useBakerFindCake(){
        let observable = this._httpService.findThatBakersCake(this.the_baker);
        observable.subscribe(data => {
            var total = 0
            for(var i=0;i<data["comment"].length;i++){
                total += data["comment"][i].star
            }
            this.theCake = data
            this.avg = total/data["comment"].length
        });
    }
}
