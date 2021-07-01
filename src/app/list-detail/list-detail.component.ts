import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskList } from '../_models/list';
import { ListsService } from '../_services/lists.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  // TODO: Get from server
  list : TaskList = {
    id: -1,
    items: [],
    description: '',
    image: '',
    title: '',
    color: ''
  };
  //listId: string ;
  // {icon_name: 'shopping', text: 'Shopping', items: [{caption: 'Tomato', completed: false}, {caption: 'Potato', completed: true}]};
  
  constructor(public listsService: ListsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.listId = this.route.snapshot.paramMap.get('id');
    this.fetchList();
  }

  fetchList(){
    let idStr = this.route.snapshot.paramMap.get('id');
    //let id: number = idStr ? +idStr : -1;
    this.listsService.fetchTaskList(idStr || "")
    .subscribe(list => 
      {
      this.list = {
          id: list.id,
          items: list.items,
          description: list.description,
          image: list.image,
          title: list.title,
          color: list.color
        };
      });
  }
/*
  fetchListNew(){
    let idStr = this.route.snapshot.paramMap.get('id');
    //let id: number = idStr ? +idStr : -1;
    this.list = this.listsService.fetchTaskListNew(idStr || "");
  }*/
}
