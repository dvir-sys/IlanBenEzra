import { Component, OnInit } from '@angular/core';
import { Item } from '../_models/item';
import { ItemsService } from '../_services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: String[] = [];

  constructor(public itemsService: ItemsService) { }

  ngOnInit(): void {
    this.fetchActiveItems();
  }

  fetchActiveItems(){
    this.itemsService.fetchActiveItems().subscribe(items => {
      this.items = items.map(item=>item.caption);
    });
  }

}
