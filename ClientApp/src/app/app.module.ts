import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { TaskDataService } from './services/task-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { TaskListModule } from './task-list/task-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { ModalModule } from 'ngx-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuModule } from './menu/menu.module';
import { ConfigService } from './services/config-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { BoardModule } from './board/board.module';
import { JwtInterceptor } from './services/interceptors/jwt-interceptor.service';
import { ErrorInterceptor } from './services/interceptors/error.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    TaskListModule,
    MenuModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BoardModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [
    UserDataService,
    TaskDataService,
    ConfigService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
