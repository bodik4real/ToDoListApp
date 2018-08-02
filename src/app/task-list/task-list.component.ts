import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TaskDataService } from '../services/task-data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TaskItem } from '../models/TaskItem';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {

  public tasks = new Array<TaskItem>();
  public IsHidden = true;

  public taskForm: FormGroup = new FormGroup({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ])
  });

  constructor(private taskDataService: TaskDataService, private fb: FormBuilder, private userDataService: UserDataService) { }

  public addTask(taskValue: string): void {
    let task = new TaskItem(this.tasks.length, taskValue);
    this.taskDataService.addTask(task);
    this.tasks.push(task);
    this.taskForm.reset();
  }

  public deleteTask(taskIndex: number): void {
    this.taskDataService.deleteTask(taskIndex);
    let currentTaskIndex = this.userDataService.getUser().tasks.findIndex(t => t.id === taskIndex);
        this.tasks.splice(currentTaskIndex, 1);
    }

  public editTask(task: TaskItem) {
    let currentTaskIndex = this.userDataService.getUser().tasks.findIndex(t => t.id === task.id);
    this.taskDataService.editTask(task);
    this.tasks[currentTaskIndex] = task;
  }
}
