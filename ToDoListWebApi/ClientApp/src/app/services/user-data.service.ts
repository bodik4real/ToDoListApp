import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import * as moment from 'moment';
import { TaskItem } from '../models/TaskItem';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';
import { ConfigService } from './config-service.service';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  private currentUserKey = 'currentUser';
  private dateFormat = 'DD-MM-YYYY';
  private testTaskList: Array<TaskItem>;
  baseUrl: string = '';
  private _loggedIn: boolean;

  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable
  constructor(private router: Router, private http: HttpClient, private configService: ConfigService) {
  }

  public generateTestTaskList(): Array<TaskItem> {
    return this.testTaskList = [new TaskItem(0, 'fewfw')];
  }

  public login(user: User): Observable<boolean> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post<string>(
        this.baseUrl + '/auth/login',
        JSON.stringify({ 'userName': user.name, 'password': user.password }),
      )
      .map(res => { return JSON.parse(res) })
      .map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this._loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      })
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

  register(name: string, password: string): Observable<User> {
    let body = JSON.stringify({ name, password });
    let headers = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<User>(this.baseUrl + "/accounts", body, headers)
  };

  logout() {
    localStorage.removeItem('auth_token');
    this._loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this._loggedIn;
  }
}
