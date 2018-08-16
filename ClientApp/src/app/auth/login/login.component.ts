import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { LoginUserModel } from '../../models/auth/LoginUserModel';
import { TaskItem } from '../../models/TaskItem';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public errorMessage: string;
  public isLoginError: boolean;

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ])
  });

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
  }

  public login(email: string, password: string) {
    if (!this.loginForm.invalid) {
      const user = new LoginUserModel(email, password);
      this.authService.login(user).subscribe(res => {
        if (res.isSuccessful) {
          this.router.navigate(['/board']);
        } else {
          this.errorMessage = res.errorMessage;
          this.isLoginError = true;
        }
      });
    }
  }
}
