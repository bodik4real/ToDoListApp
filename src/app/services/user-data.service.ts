import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import * as moment from 'moment';
import { TaskItem } from '../models/TaskItem';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  private currentUserKey = 'currentUser';
  private dateFormat = 'DD-MM-YYYY';
  private testTaskList: Array<TaskItem>;

  constructor(private router: Router) {
  }

  public generateTestTaskList(): Array<TaskItem> {
    return this.testTaskList = [new TaskItem(0, 'fewfw')];
  }

  public login(user: User): boolean {
    this.saveUser(user);
    return true;
    /*
    if (this.isAuth()) {
      const cachedUser = this.getCachedUser();
      if (name === user.name && cachedUser.password === user.password) {
        console.log('user is loggined');
        return true;
      } else {
        console.log('user is not loggined!');
      }
    } else {
      return false;
    }*/
  }

  public isAuth(): boolean {
    const user = this.getCachedUser();
    if (user === null) {
      return false;
    }
    const expectedDate = moment(user.lastLogin, this.dateFormat).add(1, 'days');
    const now = moment();
    const nowInCorrectFormat = moment(now, this.dateFormat);
    if (nowInCorrectFormat > expectedDate) {
      return false;
    }
    return true;
  }

  public getCachedUser(): User {
    const user = JSON.parse(localStorage.getItem(this.currentUserKey));
    return user;
  }

  public returnName(key: string): string {
    return JSON.parse(localStorage.getItem(key)).name;
  }

  public redirectToLogin() {
    this.router.navigate(['/login']);
  }

  public saveUser(user: User) {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  public isLogining(): boolean {
    if (this.router.url === '/login' || this.router.url === '/') {
      return false;
    } else {
      return true;
    }
  }
}
