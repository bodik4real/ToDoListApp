import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { UserDataService} from '../services/user-data.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [UserDataService]
})
export class LoginModule { }
