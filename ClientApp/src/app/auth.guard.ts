import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from './services/user-data.service';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.authService.isAuth()) {
            console.log(this.authService.isAuth());
            return true;
        } else {
            this.authService.redirectToLogin();
            return false;
        }
    }
}
