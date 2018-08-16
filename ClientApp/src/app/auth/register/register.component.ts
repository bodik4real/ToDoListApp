import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserRegistrationModel } from '../../models/auth/UserRegistrationModel';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public errorMessage: string;
  public isRegisterError: boolean;
  private pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  public registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
  }

  public register(name: string, email: string, password: string) {
    if (!this.registerForm.invalid) {
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
}
