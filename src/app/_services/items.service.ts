import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../_models/item';

@Injectable({
  providedIn: 'root'
})

export class ItemsService {
  baseUrl = 'https://localhost:5001/api/';
  todoItems: Array<string> = new Array<string>();

  constructor(private http: HttpClient) { }

  

  fetchAllItemsCount() {
    return this.http.get<number>(this.baseUrl + 'items/count');
  }

  fetchActiveItemsCount() {
    return this.http.get<number>(this.baseUrl + 'items/active-items-count');
  }

  fetchActiveItems() {
    return this.http.get<Item[]>(this.baseUrl + 'items')
    /*.pipe(
      map((item: any) => {
        if (item) {
          this.todoItems.push(JSON.stringify(item));
        }
      })
    )*/;
  }
}
