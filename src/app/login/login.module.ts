import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { DataService } from '../services/data.service';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [],
  providers: [DataService]
})
export class LoginModule { }
