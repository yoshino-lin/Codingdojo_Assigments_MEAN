import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ability: string;
    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      this.getPokemonInfo();
    }
    getPokemonInfo(){
        let observable = this._httpService.getPokemon();
        observable.subscribe(data => {
            console.log(data["name"]+"'s abilities are "+data["abilities"][0]["ability"]["name"]+" and "+data["abilities"][1]["ability"]["name"])
            let new_data = this._httpService.getAbilities(data["abilities"][0]["ability"]["name"])
            new_data.subscribe(data2 => {
                console.log(data2["pokemon"].length+" Pokemon have the overgrow ability.")
            });
        });
    }
}
