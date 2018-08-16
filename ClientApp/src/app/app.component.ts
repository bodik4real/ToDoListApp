import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list ';

  constructor(private authService: AuthService) { }

  public IsAuthenticated(): boolean {
    return this.authService.isAuth();
  }
}
