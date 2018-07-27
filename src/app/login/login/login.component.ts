import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {User} from '../../models/User';
import { Router } from '@angular/router';
import {AppRoutingModule} from './../../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private dataService: DataService, private router: Router ) {

   }
  isLogin(name, password)
  {
    if(this.dataService.isLogin(name, password))
    {
      this.router.navigate(['/taskList']);
      //location.href = 'http://localhost:4200/dashboard'; 
     }
    else
    {
       this.router.navigate(['/']);    
      // location.href = 'http://localhost:4200/login';    
    }
  }
}
