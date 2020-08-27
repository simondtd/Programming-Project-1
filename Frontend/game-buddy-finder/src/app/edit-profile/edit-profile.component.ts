import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public editGroup: FormGroup;

  constructor(private profilesService: ProfilesService, private formBuilder: FormBuilder) {
    this.editGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl(),
      region: new FormControl(),
      phone: new FormControl(),
      profilepicurl: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  public edit() {
    //Get username and Password from logingroup
    var firstname = this.editGroup.get('firstname').value;
    var lastname = this.editGroup.get('lastname').value;
    var email = this.editGroup.get('email').value;
    var username = this.editGroup.get('username').value;
    var password = this.editGroup.get('password').value;
    var repassword = this.editGroup.get('repassword').value;
    var region = this.editGroup.get('region').value;
    var phone = this.editGroup.get('phone').value;
    var profilepicurl = this.editGroup.get('profilepicurl').value;
  }
}
