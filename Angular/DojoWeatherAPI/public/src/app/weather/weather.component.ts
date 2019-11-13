import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _httpService: HttpService
  ) { }

  ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params.location)
            this.getWeatherOfTheLocation(params.location)
        });
  }
  goHome() {
    this._router.navigate(['/home']);
  }
  getWeatherOfTheLocation(where){
      let observable = this._httpService.getWeather(where);
        observable.subscribe(data => {
            console.log(data)
        })
    }
}
