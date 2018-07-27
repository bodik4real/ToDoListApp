import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: '',  component:LoginComponent  },
  { path: 'taskList',  component: TaskListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
