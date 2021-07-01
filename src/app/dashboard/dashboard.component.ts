//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { ItemsService } from '../_services/items.service';
import { ListsService } from '../_services/lists.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  box1 = "pageview"
  boxes = [{icon_name: "list", number: "0", text: "Lists"}, 
  {icon_name: "adjust", number: "0", text: "Todo Items"}, 
  {icon_name: "pageview", number: "0", text: "Active Items"} ] 
  
  constructor(public listsService: ListsService,
              public itemsService: ItemsService) { }

  ngOnInit(): void {
    this.fetchListsCount();
    this.fetchAllItemsCount();
    this.fetchActiveItemsCount();
  }

  fetchListsCount(){
    this.listsService.fetchTaskListsCount().subscribe(count => this.boxes[0].number = count.toString());
  }

  fetchAllItemsCount(){
    this.itemsService.fetchAllItemsCount().subscribe(count => this.boxes[1].number = count.toString());
  }

  fetchActiveItemsCount(){
    this.itemsService.fetchActiveItemsCount().subscribe(count => this.boxes[2].number = count.toString());
  }

  goToLists(){
    window.location.href += "lists";
  }

  goToItems(){
    window.location.href += "items";
  }

  createNewList(){
    window.location.href += "lists/-1/edit";
  }

}
