import { Component, OnInit } from '@angular/core';
import { ListBtnData } from '../_models/listBtnData';
import { ListsService } from '../_services/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: ListBtnData[] = [];
  //[{icon_name:"shopping_cart", text:"Shopping", id:1 },{icon_name:"work", text:"Work", id:2},{icon_name:"extention", text:"Fun", id:3}];
  
  constructor(public listsService: ListsService) { }

  ngOnInit(): void {
    this.fetchLists();
  }

  fetchLists(){
    this.listsService.fetchTaskLists().subscribe(lists => {
      this.lists = lists.map(list => {
        return {
          id: list.id,
          icon_name: list.image,
          text: list.title,
          color: list.color
        };
      });
    });
  }

}
