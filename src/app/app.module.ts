import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { TaskDataService } from './services/task-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { TaskListModule } from './task-list/task-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListGuard } from './task-list.guard';
import { ModalModule } from 'ngx-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    TaskListModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [
    UserDataService,
    TaskDataService,
    TaskListGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
