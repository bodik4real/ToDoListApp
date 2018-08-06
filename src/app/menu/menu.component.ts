import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  name:string;

  constructor(private userDataService: UserDataService) {
    this.name = this.userDataService.getCachedUser().name;
  }
}
