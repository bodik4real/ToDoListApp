import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { UserDataService } from '../services/user-data.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [UserDataService]
})
export class AuthModule { }
