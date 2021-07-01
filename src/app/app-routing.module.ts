import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEditComponent } from './components/list-edit/list-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListsComponent } from './lists/lists.component';



const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'lists', component: ListsComponent},
  
  
  {path: 'lists/:id', component: ListDetailComponent},
  {path: 'lists/:id/edit', component: ListEditComponent},
  {path: 'lists/new', component: ListDetailComponent},
  {path: '**', component: DashboardComponent, pathMatch: 'full'} //TODO: Change to Error message page! 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
