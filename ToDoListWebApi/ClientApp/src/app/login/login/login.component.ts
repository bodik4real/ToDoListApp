import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { TaskItem } from '../../models/TaskItem';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userDataService: UserDataService, private router: Router) {
  }

  public login(name: string, password: string) {
    let user = new User( name, password, Date.now().toString(),new Array<TaskItem>());  
    if (this.userDataService.login(user)) {
      this.router.navigate(['/taskList']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
