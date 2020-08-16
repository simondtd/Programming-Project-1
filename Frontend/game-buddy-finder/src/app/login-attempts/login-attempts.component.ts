import { Component, OnInit } from '@angular/core';
import {LoginAttemptsService} from '../services/login-attempts.service'

@Component({
  selector: 'app-login-attempts',
  templateUrl: './login-attempts.component.html',
  styleUrls: ['./login-attempts.component.scss']
})
export class LoginAttemptsComponent implements OnInit {
  loginAttempts;
  constructor(private loginAttemptService : LoginAttemptsService) { }

  ngOnInit(): void {
    this.loginAttemptService.getLoginAttempts().subscribe((data) => {
      this.loginAttempts = data;
    })
  }

}
