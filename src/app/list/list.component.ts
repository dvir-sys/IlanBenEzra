import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() icon_name = '';
  @Input() text = '';
  @Input() id = 0;
  constructor() { }

  ngOnInit(): void {
  }

  clickList(){
    window.location.href += '/' +this.id +  '/edit'
  }
}
