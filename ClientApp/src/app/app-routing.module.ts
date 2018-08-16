import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'board/:id',
    component: TaskListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: BoardComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        useHash: true
      }
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
