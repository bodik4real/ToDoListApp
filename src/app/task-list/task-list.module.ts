import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { TaskDataService } from '../services/task-data.service';
import { AppRoutingModule } from '../app-routing.module';
import { TaskListComponent } from './task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
=======
import {  TaskDataService } from '../services/task-data.service';
import { AppRoutingModule } from '../app-routing.module';
import {TaskListComponent} from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent
=======
    ReactiveFormsModule
  ],
  declarations: [
    TaskListComponent
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5
  ],
  exports: [TaskListComponent],
  providers: [TaskDataService, UserDataService]
})
export class TaskListModule { }
