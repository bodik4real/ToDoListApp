import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
<<<<<<< HEAD
import { TaskItem } from '../models/TaskItem';
=======
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

<<<<<<< HEAD
  private currentUserKey = 'currentUser';
  private dateFormat = "DD-MM-YYYY";
  testTaskList: Array<TaskItem>;

  constructor(private router: Router) {
     this.testTaskList = [new TaskItem(0,"fewfw")];
     var date = moment("2013-03-24")
     var testUser = new User("TestName", "TestSurName", "password", date.toString(), this.testTaskList);
     localStorage.setItem(this.currentUserKey, JSON.stringify(testUser));
=======
  testTaskList: string[];

  constructor(private router: Router) {
     this.testTaskList = ['feffw', 'ffwfw', 'fwf'];
     var date = moment("2013-03-24")
     var testUser = new User("TestName", "TestSurName", "password", date.toString(), this.testTaskList);
     localStorage.setItem('currentUserLogin', JSON.stringify(testUser));
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5
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
<<<<<<< HEAD
    var expectedDate = moment(user.lastLogin, this.dateFormat).add(1, 'days');
    var now = moment();
    var nowInCorrectFormat = moment(now, this.dateFormat);
=======
    var expectedDate = moment(user.lastLogin, "DD-MM-YYYY").add(1, 'days');
    var now = moment();
    var nowInCorrectFormat = moment(now, "DD-MM-YYYY");
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5
    if (user == null) {
      return false;
    }
    if (nowInCorrectFormat > expectedDate) {
      return false;
    }
    return true;
  }

  public getUser(): User {
<<<<<<< HEAD
    var user = JSON.parse(localStorage.getItem(this.currentUserKey));
=======
    var user = JSON.parse(localStorage.getItem('currentUserLogin'));
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5
    return user;
  }

  public returnName(key: string): string {
    return JSON.parse(localStorage.getItem(key)).name;
  }

  public redirectToLogin() {
    this.router.navigate(['/login']);
  }
<<<<<<< HEAD

  public saveUser(user: User)
  {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }
=======
>>>>>>> 040d39e032c2b9c6e0d7a0c581526b311f8c97f5
}
