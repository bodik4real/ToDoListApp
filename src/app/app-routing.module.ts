import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListGuard } from './task-list.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'taskList', component: TaskListComponent, canActivate: [TaskListGuard] },
  { path: '', redirectTo: '/taskList', pathMatch: 'full', canActivate: [TaskListGuard]},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
