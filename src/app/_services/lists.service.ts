import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskList } from '../_models/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  baseUrl = 'https://localhost:5001/api/';

  private _todoLists: Array<TaskList> = new Array<TaskList>();

  public get todoLists(): Array<TaskList> {
    return this._todoLists;
  }
  public set todoLists(value: Array<TaskList>) {
    this._todoLists = value;
  }
  

  constructor(private http: HttpClient) { }

  fetchTaskLists() {
    return this.http.get<TaskList[]>(this.baseUrl + 'TodoList');
  }

  fetchTaskList(id: string) {
    return this.http.get<TaskList>(this.baseUrl + 'TodoList/' + id);
  }

  editTaskList(newList: TaskList): Observable<number> {
    let url = this.baseUrl + 'TodoList/';
    return this.http.put<number>(url, newList);
  }

/*
  fetchTaskList(id: string) : List {
    let list: List;
    this.http.get<List>(this.baseUrl + 'TodoList/' + id)
    .subscribe(list => 
      {
        return {
          id: list.id,
          items: list.items,
          description: list.description,
          image: list.image,
          title: list.title,
          color: list.color
        };
      });
    
  }*/
}
