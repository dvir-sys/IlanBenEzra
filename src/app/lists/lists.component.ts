import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists = [{icon_name:"shopping_cart", text:"Shopping" },{icon_name:"work", text:"Work"},{icon_name:"extention", text:"Fun"}];
  constructor() { }

  ngOnInit(): void {
    
  }

}
