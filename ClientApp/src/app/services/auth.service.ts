import { Injectable } from '@angular/core';
import { LoginUserModel } from '../models/auth/LoginUserModel';
import { JwtAuthModel } from '../models/auth/JwtAuthModel';
import Const from '../models/Const';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { ResponseModeExtended } from '../models/ResponseModel';
import { Router } from '@angular/router';
import { UserRegistrationModel } from '../models/auth/UserRegistrationModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedIn: boolean;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  register(registerModel: UserRegistrationModel): Observable<ResponseModeExtended<JwtAuthModel>> {

    return this.http.post<ResponseModeExtended<JwtAuthModel>>(
      Const.BaseUrl + '/account/register', registerModel, { 'headers': this.headers })
      .map(res => {
        this.saveAuthJwt(res);
        return res;
      });
  }

  public login(user: LoginUserModel): Observable<ResponseModeExtended<JwtAuthModel>> {
    return this.http.post<ResponseModeExtended<JwtAuthModel>>(
      Const.BaseUrl + '/account/login',
      user,
      { 'headers': this.headers }
    )
      .map(res => {
        this.saveAuthJwt(res);
        return res;
      });
  }

  public isAuth(): boolean {
    const jwt = this.getCachedAuthJwt();

    if (jwt === null) {
      return false;
    }

    const expirationDate = moment(jwt.jwtExpire).format(Const.DateFormat);
    const now = moment().format(Const.DateFormat);
    if (now > expirationDate) {
      return false;
    }
    return true;
  }

  public getCachedAuthJwt(): JwtAuthModel {
    return JSON.parse(localStorage.getItem(Const.AuthJwtKey));
  }

  public redirectToLogin() {
    this.router.navigate(['/login']);
  }

  public logout() {
    localStorage.removeItem(Const.AuthJwtKey);
    this._loggedIn = false;
    this.redirectToLogin();
  }

  private saveAuthJwt(response: ResponseModeExtended<JwtAuthModel>): boolean {
    if (!response) {
      return false;
    }
    if (!response.isSuccessful) {
      return false;
    }

    localStorage.setItem(Const.AuthJwtKey, JSON.stringify(response.result));
    this._loggedIn = true;
  }
}
