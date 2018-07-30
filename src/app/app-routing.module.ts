import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { TaskListComponent } from './task-list/task-list/task-list.component';
import { LoginModule } from './login/login.module';
import { TaskListModule } from './task-list/task-list.module';
import { TaskListGuard } from './task-list.guard';

const routes: Routes = [
  { path: 'login',  component:LoginComponent  },
  { path: 'taskList',  component: TaskListComponent, canActivate:[TaskListGuard]  },
  { path: '', redirectTo: '/login', pathMatch: 'full', canActivate:[TaskListGuard]  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
