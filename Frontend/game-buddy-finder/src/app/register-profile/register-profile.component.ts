import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Profile } from '../models/profile';


@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.scss']
})
export class RegisterProfileComponent implements OnInit {
  public registerGroup: FormGroup;


  constructor(private profilesService: ProfilesService, private formBuilder: FormBuilder) {
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
    var profilepicurl = this.registerGroup.get('profilepicurl').value;

    var profile = new Profile(firstname, lastname, username, password, repassword, email, region, profilepicurl, phone);

    if (this.profilesService.validateUser(profile)) {
      this.profilesService.createProfile(profile);
    }

  }
}
