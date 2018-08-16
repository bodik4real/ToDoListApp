import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserRegistrationModel } from '../../models/auth/UserRegistrationModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public errorMessage: string;
  public isRegisterError: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  public register(name: string, email: string, password: string) {
    const user = new UserRegistrationModel(email, password, name);
    this.authService.register(user).subscribe(res => {
      if (res.isSuccessful) {
        this.router.navigate(['/board']);
      } else {
        this.errorMessage = res.errorMessage;
        this.isRegisterError = true;
      }
    });
  }
}
