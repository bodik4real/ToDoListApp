import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserRegistrationModel } from '../models/auth/UserRegistrationModel';
import { JwtAuthModel } from '../models/auth/JwtAuthModel';
import { UserModel } from '../models/auth/UserModel';
import Const from '../models/Const';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  private currentUserKey = 'currentUser';

  constructor() {
  }

  public getCachedUser(): UserModel {
    const jwt = <JwtAuthModel>JSON.parse(localStorage.getItem(Const.AuthJwtKey));
    if (jwt) {
      return new UserModel(jwt.userName, jwt.userId);
    }
    return null;
  }

  public getUserName(): string {
    const user = localStorage.getItem(Const.AuthJwtKey);
    if (user) {
      return user.toString();
    }
    return null;
  }

  public saveUser(user: UserRegistrationModel) {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }
}
