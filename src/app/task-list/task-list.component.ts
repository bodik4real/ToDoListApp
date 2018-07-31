import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../services/task-data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {

  public tasks = new Array<string>();

  public taskForm: FormGroup = new FormGroup({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ])
  });

  constructor(private taskDataService: TaskDataService, private fb: FormBuilder) { }

  public addTask(task: string): void {
    this.taskDataService.addTask(task);
    this.tasks.push(task);
  }
}
