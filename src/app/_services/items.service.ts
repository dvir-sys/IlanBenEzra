import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListItem } from '../_models/listItem';

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
    return this.http.get<ListItem[]>(this.baseUrl + 'items')
    /*.pipe(
      map((item: any) => {
        if (item) {
          this.todoItems.push(JSON.stringify(item));
        }
      })
    )*/;
  }

  fetchItemsByListId(id: number) {
    return this.http.get<ListItem[]>(this.baseUrl + 'items/from-list/' + id);
  }
  
  addNewItem(item: ListItem): Observable<ListItem> {
    return this.http.post<ListItem>(this.baseUrl + 'items/add/', item);
  }

  markItemAsCompleted(item: ListItem) {
    item.isCompleted = true;
    return this.http.put<ListItem>(this.baseUrl + 'items/complete/', item);
  }

  
}
