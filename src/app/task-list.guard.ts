import {CanActivate, Router,  ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserDataService} from './services/user-data.service';
import { Injectable } from "@angular/core";

@Injectable()
export class TaskListGuard implements CanActivate
{
    constructor(private userDataService: UserDataService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean
    {
        if(this.userDataService.isAuth())
        {
            console.log(this.userDataService.isAuth());
            return true;
        }
        else
        {
            this.userDataService.redirectToLogin();             
            return false;   
        }
    }
}