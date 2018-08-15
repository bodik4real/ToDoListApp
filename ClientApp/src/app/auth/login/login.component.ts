import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { LoginUserModel } from '../../models/auth/LoginUserModel'
import { TaskItem } from '../../models/TaskItem';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userDataService: UserDataService, private router: Router) {
  }

  public login(email: string, password: string) {
    let user = new LoginUserModel( email, password);
    this.userDataService.login(user).subscribe(isLoggedIn=>{
      if (isLoggedIn) {
        this.router.navigate(['/taskList']);
      } else {
        this.router.navigate(['/login']);
      }
    })  
  }
}
