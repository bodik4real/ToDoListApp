import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { LoginUserModel } from '../../models/auth/LoginUserModel';
import { TaskItem } from '../../models/TaskItem';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public errorMessage: string;
  public isRegisterError: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  public login(email: string, password: string) {
    const user = new LoginUserModel(email, password);
    this.authService.login(user).subscribe(res => {
      if (res.isSuccessful) {
        this.router.navigate(['/board']);
      } else {
        this.errorMessage = res.errorMessage;
        this.isRegisterError = true;
      }
    });
  }
}
