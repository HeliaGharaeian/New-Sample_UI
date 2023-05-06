import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  //{ path: '', redirectTo: 'Home', pathMatch: 'full',children:[]},
  { path: '', component: HomeComponent },
  { path: 'AddUser', component: AddUserComponent },
  { path: 'ViewUser/:Id', component: ViewUserComponent },
  { path: 'EditUser/:Id', component: EditUserComponent } ,
  { path: '**', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
