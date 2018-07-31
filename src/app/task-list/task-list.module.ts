import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  TaskDataService } from '../services/task-data.service';
import { AppRoutingModule } from '../app-routing.module';
import {TaskListComponent} from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TaskListComponent
  ],
  exports: [TaskListComponent],
  providers: [TaskDataService, UserDataService]
})
export class TaskListModule { }
