//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
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
 // constructor(private http: HttpClient) { }

  async ngOnInit() {
    // var homePage = await this.http.get("https://localhost:5001/api/Home").toPromise();
    // console.log(homePage);
  }

}
