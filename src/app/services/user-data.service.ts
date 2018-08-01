import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { TaskItem } from '../models/TaskItem';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private currentUserKey = 'currentUser';
  private dateFormat = "DD-MM-YYYY";
  testTaskList: Array<TaskItem>;

  constructor(private router: Router) {
     this.testTaskList = [new TaskItem(0,"fewfw")];
     var date = moment("2013-03-24")
     var testUser = new User("TestName", "TestSurName", "password", date.toString(), this.testTaskList);
     localStorage.setItem(this.currentUserKey, JSON.stringify(testUser));
  }

  public login(name: string, password: string): boolean {
    if (this.isAuth()) {
      let user = this.getUser();
      if (name === user.name && password === user.password) {
        console.log("user is loggined");
        return true;
      }
      else {
        console.log("user is not loggined!");
      }
    }
    else {
      return false;
    }
  }

  public isAuth(): boolean {
    var user = this.getUser();
    var expectedDate = moment(user.lastLogin, this.dateFormat).add(1, 'days');
    var now = moment();
    var nowInCorrectFormat = moment(now, this.dateFormat);
    if (user == null) {
      return false;
    }
    if (nowInCorrectFormat > expectedDate) {
      return false;
    }
    return true;
  }

  public getUser(): User {
    var user = JSON.parse(localStorage.getItem(this.currentUserKey));
    return user;
  }

  public returnName(key: string): string {
    return JSON.parse(localStorage.getItem(key)).name;
  }

  public redirectToLogin() {
    this.router.navigate(['/login']);
  }

  public saveUser(user: User)
  {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }
}
