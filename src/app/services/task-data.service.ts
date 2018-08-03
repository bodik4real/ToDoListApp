import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';
import { TaskItem } from '../models/TaskItem';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(private router: Router, private userDataService: UserDataService) {
  }

  public addTask(task: TaskItem): void {
    console.log(this.userDataService.getUser().tasks);
    const user = this.userDataService.getUser();
    user.tasks.push(task);
    localStorage.setItem('currentUserLogin', JSON.stringify(user));
  }

  public deleteTask(taskId: number): void {

    const currentTaskIndex = this.userDataService.getUser().tasks.findIndex(t => t.id === taskId);

    if (currentTaskIndex) {
      this.userDataService.getUser().tasks.splice(currentTaskIndex, 1);
    }
  }

  public editTask(editedTask: TaskItem): void {
    const user = this.userDataService.getUser();
    if (user) {
      const currentTaskIndex = this.userDataService.getUser().tasks.findIndex(t => t.id === editedTask.id);
      if (currentTaskIndex) {
        user.tasks[currentTaskIndex] = editedTask;
        this.userDataService.saveUser(user);
      }
    }
  }
}
