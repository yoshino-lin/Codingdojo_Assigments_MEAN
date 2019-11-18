import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
    { path: 'restaurants', component: HomeComponent },
    { path: 'restaurants/new', component: NewComponent },
    { path: 'restaurants/:id/edit', component: EditComponent },
    { path: 'restaurants/:id', component: QuotesComponent },
    { path: 'restaurants/:id/review', component: WriteComponent },
    // redirect to /alpha if there is nothing in the url
    // the ** will catch anything that did not match any of the above routes
    { path: '*', pathMatch: 'full', redirectTo: '/restaurants' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
