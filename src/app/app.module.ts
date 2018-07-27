import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module'; 
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
import { RouterModule } from '../../node_modules/@angular/router';

import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListComponent

  ],
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
