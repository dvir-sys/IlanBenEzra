import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { BoxComponent } from './box/box.component';
import { ItemsComponent } from './items/items.component';
import { ListsComponent } from './lists/lists.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ListEditComponent } from './components/list-edit/list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoxComponent,
    DashboardComponent,
    ItemsComponent,
    ListsComponent,
    ListDetailComponent,
    ListComponent,
    ItemComponent,
    ListEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MatIconModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
