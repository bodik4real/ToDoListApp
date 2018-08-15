import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TaskItem } from '../models/TaskItem';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';
import { ConfigService } from './config-service.service';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUserModel } from '../models/auth/LoginUserModel';
import { UserRegistrationModel } from '../models/auth/UserRegistrationModel';
import { JwtAuthModel } from '../models/auth/JwtAuthModel';
import { UserModel } from '../models/auth/UserModel';
import Const from '../models/Const';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  private currentUserKey = 'currentUser';
  private testTaskList: Array<TaskItem>;
  private _authTokenKey = 'auth_token';

  constructor(private router: Router, private http: HttpClient, private configService: ConfigService) {
  }

  public getCachedUser(): UserModel {
    const jwt = <JwtAuthModel>JSON.parse(localStorage.getItem(Const.AuthJwtKey));
    if(jwt)
    {
      return new UserModel(jwt.userName, jwt.userId);      
    }
    return  null;
  }

  public getUserName(): string {
    const user = this.getCachedUser();
    if (user) {
      return user.userName;
    }
    return null;
  }

  public saveUser(user: UserRegistrationModel) {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }
}
