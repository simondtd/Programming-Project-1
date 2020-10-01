import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public loginGroup: FormGroup;


  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
  }


  public login() {
    //Get username and Password from logingroup
    var username = this.loginGroup.get('username').value;
    var password = this.loginGroup.get('password').value;

    //Get the user id
    this.usersService.login(username, password).subscribe((userId) => {
      
      //Get the user with that id
      this.usersService.getUser(userId).subscribe((user) => {
        
        //Check if user exists
        if (user != null) {
            this.usersService.authorizeLogin(userId)
        }
        //Display error popup
        else {

        }
      })
    })
  }
}
