import { Component, OnInit } from '@angular/core';
import { UserDataService } from './../services/user-data.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent{

  constructor(private userDataService: UserDataService) { }

  public redirectToLoginPage(){
    this.userDataService.redirectToLogin();
  }

}
