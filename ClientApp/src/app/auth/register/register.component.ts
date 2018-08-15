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

  errorMessage: string;
  isRegisterError: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  public register(email: string, password: string) {
    let user = new UserRegistrationModel(name, email, password);
    this.authService.register(user).subscribe(res => {
      if (res.isSuccessful) {
        this.router.navigate(['/taskList']);
      } else {
        this.errorMessage = res.errorMessage;
        this.isRegisterError = true;
      }
    })
  }

}
