import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', component: DashboardComponent},/*
  {path: 'lists', component: ListsComponent},
  {path: 'lists/:id', component: ListDetailComponent},
  {path: 'lists/:id/edit', component: ListDetailComponent},
  {path: 'items', component: ListsComponent},
  {path: 'messages', component: MessagesComponent},*/
  {path: '**', component: DashboardComponent, pathMatch: 'full'} //TODO: Change to Error message page! 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
