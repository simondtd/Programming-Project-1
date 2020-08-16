import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }


  public login(username, password) {
    var userid = this.usersService.login(username, password)
    var user = this.usersService.getUser(userid)
    if (user == null){
      
    }
    if (user != null) {

    }
  }

}
