import { Component, OnInit } from '@angular/core';
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

export class TaskListComponent implements OnInit {

  public tasks = new Array<TaskItem>();
  public IsHidden = true;
  private boardId: string;
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
    this.route.params.subscribe(res => this.boardId = res.id);

  }

  public ngOnInit() {
    this.taskDataService.getTaskItemsByBoardId(this.boardId).subscribe(res => {
      if (res.isSuccessful) {
        this.tasks = res.result;
      }
    });

  }

  public addTask(taskValue: string): void {
    if (taskValue.length > 5) {
      const task = new TaskItem(this.boardId, taskValue);
      this.taskDataService.save(task).subscribe(res => {
        if (res.isSuccessful) {
          this.tasks.push(res.result);
        }
      });

      this.taskForm.reset();
    }
  }

  public deleteTask(taskId: number): void {
    this.taskDataService.deleteTask(taskId).subscribe(res => {
      if (res.isSuccessful) {
        const currentTaskIndex = this.tasks.findIndex(t => t.id === taskId);
        this.tasks.splice(currentTaskIndex, 1);
      }
    });
  }

  public editTask(task: TaskItem) {
    const currentTaskIndex = this.tasks.findIndex(t => t.id === task.id);
    this.taskDataService.editTask(task).subscribe(res => {
      if (res.isSuccessful) {
        this.tasks[currentTaskIndex] = res.result;
      }
    });
  }
}
