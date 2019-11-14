import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ErroComponent } from './erro/erro.component';

const routes: Routes = [
    { path: 'new', component: NewComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'erro', component: ErroComponent },
    // redirect to /alpha if there is nothing in the url
    { path: '', component: HomeComponent },
    // the ** will catch anything that did not match any of the above routes
    { path: '*', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
