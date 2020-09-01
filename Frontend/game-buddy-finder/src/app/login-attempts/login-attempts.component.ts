import { Component, OnInit } from '@angular/core';
import {LoginAttemptsService} from '../services/login-attempts.service';
import {UsersService} from '../services/users.service';


@Component({
  selector: 'app-login-attempts',
  templateUrl: './login-attempts.component.html',
  styleUrls: ['./login-attempts.component.scss']
})
export class LoginAttemptsComponent implements OnInit {
  loginAttempts;
  constructor(private loginAttemptService : LoginAttemptsService, private usersService:UsersService) { }

  ngOnInit(): void {
    this.loginAttemptService.getLoginAttemptsOfUser(this.usersService.UserId).subscribe((data) => {
      this.loginAttempts = data;
    })
  }
}
