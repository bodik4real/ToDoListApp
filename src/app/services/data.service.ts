import { Injectable } from '@angular/core';
import { concat } from 'rxjs';
import { User } from '../models/User';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    testTaskList : string[];

  constructor( ) { 
    this.testTaskList = ['feffw', 'ffwfw','fwf'];
    var testUser = new User("TestName", "TestSurName","password", '28/05/2011 12:05', this.testTaskList);
    localStorage.setItem('currentUserLogin',JSON.stringify(testUser));
  }

  isLogin(name, password)
  {
      var user =  this.GetUser();

      if(name === user.name && password === user.password)
      {
        console.log("user is loggined");
        var getLastLoginTime = parseInt(user.lastLogin.split(' ')[1].split(':')[0]);
        if(getLastLoginTime < getLastLoginTime + 1)
        {
          //this.router.navigate(['/']);    
          //return false;
        }
        //if(user.lastLogin.isAfter(user.lastLogin.add(24, 'hours').format("YYYY-MM-DD HH:mm")))
        //{
          //this.router.navigate(['/']);    
          //return false;
        //}
        return true;
      }
      else
      {
        console.log("user is not  loggined!");
        return false;
      }
  }

  GetUser()
  {
    var user = JSON.parse(localStorage.getItem('currentUserLogin'));
    return user;
  }

  ReturnName(key)
  {
    return JSON.parse(localStorage.getItem(key)).name;
  }

  AddTask(task)
  {
    console.log(this.GetUser().testTaskList);
    this.GetUser().testTaskList.push(task);
    return false;
  }

  DeleteTask(task)
  {
    for(let i = 0; i<this.GetUser().testTaskList.length; i++)
    {
      if(this.GetUser().testTaskList[i] == task)
      {
        this.GetUser().testTaskList.splice(i,1);
      }
    }
    return false;
  }

  EditTask(task)
  {
    for (let i = 0; i<this.GetUser().testTaskList.length; i++)
    {
      if(this.GetUser().testTaskList[i] == task)
      {
        task[i] = task;
      }
    }
    return false;
  }
}

