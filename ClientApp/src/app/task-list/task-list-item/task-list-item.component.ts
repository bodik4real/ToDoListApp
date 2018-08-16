import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { TaskItem } from '../../models/TaskItem';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {

  public isTaskEditing: boolean;
  public modalRef: BsModalRef;

  @Input() task: TaskItem;
  @Output() taskEdit = new EventEmitter<TaskItem>();
  @Output() taskDelete = new EventEmitter<number>();
  @Output() taskOpenModel = new EventEmitter<any>();

  constructor(private modalService: BsModalService) {

  }

  public editTask(task: TaskItem) {
    this.task = task;
    this.taskEdit.emit(this.task);
    this.isTaskEditing = false;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  public deleteTask(taskNumber: number) {
    this.task.id = taskNumber;
    this.taskDelete.emit(this.task.id);
    this.modalRef.hide();
  }

  public startEditing() {
    this.isTaskEditing = !this.isTaskEditing;
  }

  public decline(): void {
    this.modalRef.hide();
  }
}
