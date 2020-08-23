import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.scss']
})
export class RegisterProfileComponent implements OnInit {
  public registerGroup: FormGroup;


  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {
    this.registerGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl(),
      region: new FormControl(),
      phone: new FormControl(),

    });
  }

  ngOnInit(): void {
  }


  public register() {
    //Get username and Password from logingroup
    var firstname = this.registerGroup.get('firstname').value;
    var lastname = this.registerGroup.get('lastname').value;
    var email = this.registerGroup.get('email').value;
    var username = this.registerGroup.get('username').value;
    var password = this.registerGroup.get('password').value;
    var repassword = this.registerGroup.get('repassword').value;
    var region = this.registerGroup.get('region').value;
    var phone = this.registerGroup.get('phone').value;

    //Debug to check, NOT SECURE
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(repassword);
    console.log(region);
    console.log(phone);


   /* //Get the user id
    this.usersService.login(username, password).subscribe((userId) => {

      //PRint out for debug purposes
      console.log(userId);

      //Get the user with that id
      this.usersService.getUser(userId).subscribe((user) => {

        //Check if user exists
        if (user != null) {
          console.log(user)
          this.usersService.authorizeLogin(userId)
        }
        //Display error popup
        else {

        }
      })
    })*/
  }
}
