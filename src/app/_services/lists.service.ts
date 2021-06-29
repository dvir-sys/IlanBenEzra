import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../_models/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  baseUrl = 'https://localhost:5001/api/';

  private _todoLists: Array<List> = new Array<List>();

  public get todoLists(): Array<List> {
    return this._todoLists;
  }
  public set todoLists(value: Array<List>) {
    this._todoLists = value;
  }
  

  constructor(private http: HttpClient) { }

  fetchTaskLists() {
    return this.http.get<List[]>(this.baseUrl + 'TodoList');
  }
}
