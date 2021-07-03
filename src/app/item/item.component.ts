import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input()
  isCompleted:boolean = false;

  @Input()
  caption:string='';

  ngOnInit(): void {
  }

}
