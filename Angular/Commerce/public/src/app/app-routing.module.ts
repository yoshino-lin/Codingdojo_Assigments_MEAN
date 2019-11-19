import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
    { path: 'products', component: HomeComponent },
    { path: 'products/new', component: NewComponent },
    { path: 'products/:id/edit', component: EditComponent },
    { path: 'products/:id', component: QuotesComponent },
    // redirect to /alpha if there is nothing in the url
    // the ** will catch anything that did not match any of the above routes
    { path: '*', pathMatch: 'full', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
