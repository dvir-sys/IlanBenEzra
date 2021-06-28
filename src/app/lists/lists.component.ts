import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists = [{icon_name:"shopping_cart", text:"Shopping", id:1 },{icon_name:"work", text:"Work", id:2},{icon_name:"extention", text:"Fun", id:3}];
  constructor() { }

  ngOnInit(): void {
    
  }

}
