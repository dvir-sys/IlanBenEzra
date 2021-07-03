import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskList } from '../_models/list';
import { ListItem } from '../_models/listItem';
import { ItemsService } from '../_services/items.service';
import { ListsService } from '../_services/lists.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  
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
  
  newItemFormControl!: FormControl;
  newItemCation: string = '';

  constructor(public listsService: ListsService,
              public itemsService: ItemsService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.listId = this.route.snapshot.paramMap.get('id');
    
    this.newItemFormControl = this.formBuilder.control(this.newItemCation, [Validators.minLength(10)]);

    this.fetchList();
  }
  
  async completeItem(item: ListItem) {
    await this.itemsService.markItemAsCompleted(item).toPromise();
  }

  

  fetchItemsByListId(id: number) {
    //this.items$ = this.dataService.getItemsOfList(this.listId);
    
    this.itemsService.fetchItemsByListId(id)
    .subscribe(items => {
      //items.map(item=>this.list.items.push(item));
      this.list.items = items;
    });
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
        this.fetchItemsByListId(list.id);
      });
  }

  async addNewItemToList() 
  {let item = {
      caption: this.newItemFormControl.value,
      listId: this.list.id,
      isCompleted: false
    } as ListItem;

    await this.itemsService.addNewItem(item).toPromise();
    this.newItemFormControl.reset('');
    this.fetchItemsByListId(this.list.id);
  }

/*
  fetchListNew(){
    let idStr = this.route.snapshot.paramMap.get('id');
    //let id: number = idStr ? +idStr : -1;
    this.list = this.listsService.fetchTaskListNew(idStr || "");
  }*/
}
