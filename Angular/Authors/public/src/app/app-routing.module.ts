import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'new', component: NewComponent },
    { path: 'edit/:id', component: EditComponent },
    // redirect to /alpha if there is nothing in the url
    { path: '', component: HomeComponent },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
