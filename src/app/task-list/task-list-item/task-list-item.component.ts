import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { TaskItem } from '../../models/TaskItem';
import { BsModalRef } from '../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {

  public isTaskEditing: boolean;

  @Input() task: TaskItem;
  @Output() onTaskEdit = new EventEmitter<TaskItem>();
  @Output() onTaskDelete = new EventEmitter<number>();

  public editTask(task: TaskItem) {
    this.task = task;
    this.onTaskEdit.emit(this.task);
    this.isTaskEditing = false;
  }

  public deleteTask(taskNumber: number) {
    this.task.id = taskNumber;
    this.onTaskDelete.emit(this.task.id);
  }

  public startEditing() {
    this.isTaskEditing = !this.isTaskEditing;
  }
}
