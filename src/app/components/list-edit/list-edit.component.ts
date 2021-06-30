import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { COLORS } from 'src/app/_models/data/colors';
import { MATERIAL_ICONS } from 'src/app/_models/data/icons';
import { TaskList } from 'src/app/_models/list';
import { ListsService } from 'src/app/_services/lists.service';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  list : TaskList = {
    id: -1,
    items: [],
    description: '',
    image: '',
    title: '',
    color: ''
  };
  
  listId: string = '-1' ;

  formGroup!: FormGroup;

  icons: string[] = MATERIAL_ICONS;
  colors: string[] = COLORS;
  
  constructor(
    private formBuilder: FormBuilder,
    public listsService: ListsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id') || '-1';
    if (this.listId == '-1'){
      //createNewList();
      this.buildForm(this.list);
    }else{
      this.fetchList();
    }
  }

  fetchList(){
    this.listsService.fetchTaskList(this.listId)
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

  
  buildForm(list: TaskList) {

    this.formGroup = this.formBuilder.group({
      id: [list.id],
      title: [list.title, [Validators.required]],
      color: [list.color, [Validators.required]],
      description: [list.description, [Validators.required, Validators.minLength(30)/*, wordsValidator(10) */]],
      image: [list.image, [Validators.required]]
    });
    /*
    if (list.id == -1)
      this.pageTitle$.next("Add List");
    else
      this.pageTitle$.next("Edit List");
    */
  }
  
  async save() {/*
    if (this.formGroup.value.id == -1) {
      delete this.formGroup.value.id;
      //console.log("edit list - new listId ",res.id);
      //this.formGroup.value.id = res.id;
    }
    
    else
      await this.dataService.saveList(this.formGroup.value).toPromise();
    */
    let id = await this.listsService.editTaskList(this.formGroup.value).subscribe(id => {
      this.list.id = id;
    });
    this.router.navigate(['lists', /*this.formGroup.value.*/id]);
  }

  /*
  fetchActiveItems(){
    this.itemsService.fetchActiveItems().subscribe(items => {
      this.items = items.map(item=>item.caption);
    });
  }
*/
}
