import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { TaskItem } from '../models/TaskItem';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';
import { ConfigService } from './config-service.service';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUserModel } from '../models/auth/LoginUserModel';
import { RegisterUserModel } from '../models/auth/RegisterUserModel';
import { JwtAuthModel } from '../models/auth/JwtAuthModel';
import { UserModel } from '../models/auth/UserModel';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  private currentUserKey = 'currentUser';
  private dateFormat = 'DD-MM-YYYY';
  private testTaskList: Array<TaskItem>;
  baseUrl: string = 'https://localhost:44326/api/account';
  private _loggedIn: boolean;
  private _loginUrl = this.baseUrl + '/login';

  constructor(private router: Router, private http: HttpClient, private configService: ConfigService) {
  }

  public login(user: LoginUserModel): Observable<boolean> {

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post<JwtAuthModel>(
        this._loginUrl,
        user,
        { 'headers': headers }
      )
      .map(res => {
        if (!res) {
          return false;
        }
        if (!res.authToken) {
          return false;
        }
        localStorage.setItem('auth_token', res.authToken);
        this._loggedIn = true;
        return true;
      })
  }

  public isAuth(): boolean {
    const user = this.getCachedUser();
    return true;
    /*
    if (user === null) {
      return false;
    }
    */
    /*const expectedDate = moment(user.lastLogin, this.dateFormat).add(1, 'days');
    const now = moment();
    const nowInCorrectFormat = moment(now, this.dateFormat);
    if (nowInCorrectFormat > expectedDate) {
      return false;
    }
    return true;
    */
  }

  public getCachedUser(): UserModel {
    const user = JSON.parse(localStorage.getItem(this.currentUserKey));
    return user;
  }

  public getUserName(): string {
    const user = this.getCachedUser();
    if (user) {
      return user.userName;
    }
    return null;
  }

  public redirectToLogin() {
    this.router.navigate(['/login']);
  }

  public saveUser(user: RegisterUserModel) {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  register(name: string, email: string, password: string): Observable<RegisterUserModel> {
    let body = JSON.stringify({ name, email, password });
    let headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<RegisterUserModel>(this.baseUrl + "/accounts", body, headers)
  };

  logout() {
    localStorage.removeItem('auth_token');
    this._loggedIn = false;
  }

  isLoggedIn() {
    return this._loggedIn;
  }
}
