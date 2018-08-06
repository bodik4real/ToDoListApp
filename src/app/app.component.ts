import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListApp';

  constructor(private userDataService: UserDataService) {}

  public isLogining():boolean{
    return this.userDataService.isLogining();
  }
}
