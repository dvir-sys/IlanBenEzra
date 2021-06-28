import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  // TODO: Get from server
  list = {icon_name: 'shopping', text: 'Shopping', items: [{caption: 'Tomato', completed: false}, {caption: 'Potato', completed: true}]};
  constructor() { }

  ngOnInit(): void {
  }

}
