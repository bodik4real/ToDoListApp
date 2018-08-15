import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list ';

  constructor(private userDataService: UserDataService) {}

  public IsAuthenticated():boolean{
    return this.userDataService.isAuth();
  }
}
