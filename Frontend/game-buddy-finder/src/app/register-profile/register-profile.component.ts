import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Profile } from '../models/profile';
import { Router } from '@angular/router'
import { md5 } from '../Helper/md5';


@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.scss']
})
export class RegisterProfileComponent implements OnInit {
  public registerGroup: FormGroup;


  constructor(private router: Router, private profilesService: ProfilesService, private formBuilder: FormBuilder) {
    // a formgroup for register to connect the html input to the component.ts
    this.registerGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl(),
      region: new FormControl(),
      phone: new FormControl(),
      profilepicurl: new FormControl(),
      secretQuestion: new FormControl(),
      secretAnswer: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  // a function to register a new account 
  public register() {
    //assign the listed variables below to the inputed field in the html file 
    var firstname = this.registerGroup.get('firstname').value;
    var lastname = this.registerGroup.get('lastname').value;
    var email = this.registerGroup.get('email').value;
    var username = this.registerGroup.get('username').value;
    var password = this.registerGroup.get('password').value;
    var repassword = this.registerGroup.get('repassword').value;
    var region = this.registerGroup.get('region').value;
    var phone = this.registerGroup.get('phone').value;
    var profilepicurl = this.registerGroup.get('profilepicurl').value;
    var secretQuestion = this.registerGroup.get('secretQuestion').value;
    var secretAnswer = this.registerGroup.get('secretAnswer').value;
    
    // if password is empty, a popup will show
    if (password == null || repassword == null) {
      window.alert("Invalid Password(s)");
      return;
    }

    // to hash the password
    var hash = md5(password);
    var rehash = md5(repassword);

    // to create a new profile. The parameters that are required are in models 
    var profile = new Profile(0, firstname, lastname, username, hash, rehash, email, region, profilepicurl, phone, secretQuestion, secretAnswer);

    // if username is taken, a popup window will show
    if (this.profilesService.validateUser(profile)) {
      this.profilesService.createProfile(profile).subscribe(data => {
        if (data == 0) {
          window.alert("Username is taken!");
        }
        // if new user is registered, they will be redirected to the login page 
        else {
          this.router.navigate(['/login']);
        }
      })
    }
    // if any input fields are invalid, a popup will show 
    else {
      window.alert("Some inputfields are invalid");
    }
  }
}
