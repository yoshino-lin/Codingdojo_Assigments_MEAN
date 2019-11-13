import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
    { path: ':location', component: WeatherComponent },
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '/' },
    // the ** will catch anything that did not match any of the above routes
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
