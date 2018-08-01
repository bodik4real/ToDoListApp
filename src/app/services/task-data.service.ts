import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';
<<<<<<< HEAD
import { TaskItem } from '../models/TaskItem';
=======
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(private router: Router, private userDataService: UserDataService) {
  }

<<<<<<< HEAD
  public addTask(task: TaskItem): void {
    console.log(this.userDataService.getUser().tasks);
    var user = this.userDataService.getUser();
    user.tasks.push(task);
    localStorage.setItem('currentUserLogin', JSON.stringify(user));
  }

  public deleteTask(taskId: number): void {

    let currentTaskIndex = this.userDataService.getUser().tasks.findIndex(t => t.id === taskId);
    
    if(currentTaskIndex)
    {
      this.userDataService.getUser().tasks.splice(currentTaskIndex, 1);
    }
  }

  public editTask( editedTask: TaskItem): TaskItem {
    let user = this.userDataService.getUser();
    for (let i = 0; i < this.userDataService.getUser().tasks.length; i++) {
      if (user.tasks[i].id === editedTask.id) {
        user.tasks[i].value = editedTask.value;
        this.userDataService.saveUser(user);
        return user.tasks[i];
      }
    }
=======
  public getUser(): User {
    var user = JSON.parse(localStorage.getItem('currentUserLogin'));
    return user;
  }

<<<<<<< HEAD
  public addTask(task: string): boolean {
=======
  public addTask(task: string): void {
>>>>>>> 18db4d068a90e3c92485133af9c79bfbcba289aa
    console.log(this.getUser().tasks);
    var user = this.userDataService.getUser();
    user.tasks.push(task);
    localStorage.setItem('currentUserLogin', JSON.stringify(user));
<<<<<<< HEAD
    return false;
=======
>>>>>>> 18db4d068a90e3c92485133af9c79bfbcba289aa
  }

  public deleteTask(task: string): boolean {
    for (let i = 0; i < this.getUser().tasks.length; i++) {
      if (this.getUser().tasks[i] == task) {
        this.getUser().tasks.splice(i, 1);
      }
    }
    return false;
  }

<<<<<<< HEAD
  public editTask(task: string): boolean {
    for (let i = 0; i < this.getUser().tasks.length; i++) {
      if (this.getUser().tasks[i] == task) {
      }
    }
    return false;
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5
=======
  public editTask(oldTask: string, newTask: string) {
    for (let i = 0; i < this.getUser().tasks.length; i++) {
      if (this.getUser().tasks[i] == oldTask) 
      {
        this.getUser().tasks[i] = newTask;
      }
    }
    return this.getUser().tasks;
>>>>>>> 18db4d068a90e3c92485133af9c79bfbcba289aa
  }
}

