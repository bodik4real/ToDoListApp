import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(private router: Router, private userDataService: UserDataService) {
  }

  public getUser(): User {
    var user = JSON.parse(localStorage.getItem('currentUserLogin'));
    return user;
  }

  public addTask(task: string): boolean {
    console.log(this.getUser().tasks);
    var user = this.userDataService.getUser();
    user.tasks.push(task);
    return false;
  }

  public deleteTask(task: string): boolean {
    for (let i = 0; i < this.getUser().tasks.length; i++) {
      if (this.getUser().tasks[i] == task) {
        this.getUser().tasks.splice(i, 1);
      }
    }
    return false;
  }

  public editTask(task: string): boolean {
    for (let i = 0; i < this.getUser().tasks.length; i++) {
      if (this.getUser().tasks[i] == task) {
        // func
      }
    }
    return false;
  }
}

