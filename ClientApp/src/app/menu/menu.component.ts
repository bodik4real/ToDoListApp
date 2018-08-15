import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  name: string;

  constructor(private userDataService: UserDataService, private authService: AuthService) {
    this.name = this.userDataService.getUserName();
  }

  public logout()
  {
        this.authService.logout();
  }
}
