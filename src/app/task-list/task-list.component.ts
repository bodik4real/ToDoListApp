import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TaskDataService } from '../services/task-data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TaskItem } from '../models/TaskItem';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {

  modalRef: BsModalRef;

  public tasks = new Array<TaskItem>();
  public IsHidden = true;

  public taskForm: FormGroup = new FormGroup({
    task: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ])
  });

  constructor(private taskDataService: TaskDataService, private fb: FormBuilder, private modalService: BsModalService, private userDataService: UserDataService) { }

  public openModal(template) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  public decline(): void {
    this.modalRef.hide();
  }


  public addTask(taskValue: string): void {
    let task = new TaskItem(this.tasks.length, taskValue);
    this.taskDataService.addTask(task);
    this.tasks.push(task);
    this.taskForm.reset();
  }

  public deleteTask(taskIndex: number): void {

    let currentTaskIndex = this.userDataService.getUser().tasks.findIndex(t => t.id === taskIndex);
    this.tasks.splice(currentTaskIndex, 1);

    this.taskDataService.deleteTask(taskIndex);
     // this.modalRef.hide();
  }

  public editTask(task: TaskItem) {
    //let currentTaskIndex = this.userDataService.getUser().tasks.findIndex(t => t.id === task.id);
    for(let i=0;i<this.userDataService.getUser().tasks.length;i++)
    {
      if(this.userDataService.getUser().tasks[i].id===task.id)
      {
        this.tasks[i] = this.taskDataService.editTask(task);
      }
    }
  }
}
