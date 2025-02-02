import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _httpService: HttpService
    ){}
    ngOnInit(){
        this._router.navigate(['/products']);
    }
}
