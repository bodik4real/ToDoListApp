import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDataService } from '../services/task-data.service';
import { AppRoutingModule } from '../app-routing.module';
import { TaskListComponent } from './task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent
  ],
  exports: [
    TaskListComponent,
  TaskListItemComponent
],
  providers: [TaskDataService, UserDataService]
})
export class TaskListModule { }
