import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  tasks: string[] = new Array();
  taskForm: FormGroup = new FormGroup({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ])
  });

  getTask()
  {}

  constructor(private dataService: DataService, private fb: FormBuilder ) {
    console.log("taskList class ran");
   }
}

 
