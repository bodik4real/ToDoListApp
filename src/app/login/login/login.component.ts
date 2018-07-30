import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userDataService: UserDataService, private router: Router) { }

  Login(name: string, password: string) {
    if (this.userDataService.login(name, password)) {
      this.router.navigate(['/taskList']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
