import { Component } from '@angular/core';
import { TaskDataService } from '../services/task-data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TaskItem } from '../models/TaskItem';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {

  public tasks = new Array<TaskItem>();
  public IsHidden = true;
  modalRef: BsModalRef;

  public taskForm: FormGroup = new FormGroup({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ])
  });

  constructor(
    private taskDataService: TaskDataService,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
      this.route.params.subscribe(res => console.log(res.id));

  }

  public addTask(taskValue: string): void {
    if (taskValue.length > 5) {
      const task = new TaskItem(this.tasks.length, taskValue);
      this.taskDataService.addTask(task);
      this.tasks.push(task);
      this.taskForm.reset();
    }
  }

  public deleteTask(taskIndex: number, template): void {
    this.taskDataService.deleteTask(taskIndex);
    const currentTaskIndex = this.taskDataService.getAllTasks().findIndex(t => t.id === taskIndex);
    this.tasks.splice(currentTaskIndex, 1);
  }

  public editTask(task: TaskItem) {
    const currentTaskIndex = this.taskDataService.getAllTasks().findIndex(t => t.id === task.id);
    this.taskDataService.editTask(task);
    this.tasks[currentTaskIndex] = task;
  }
}
