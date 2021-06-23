import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() icon_name = '';
  @Input() text = '';
  @Input() number = '';

  constructor() { }

  ngOnInit(): void {
  }

}
