import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Profile } from '../models/profile';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { InterestService } from '../services/interest.service';
import { Interest } from '../models/interest';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public editGroup: FormGroup;
  public Profile;
  public User;
  public interests;

  constructor(private router: Router, private profilesService: ProfilesService, private formBuilder: FormBuilder, private usersService: UsersService, private interestService: InterestService) {
    this.editGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      region: new FormControl(),
      phone: new FormControl(),
      profilepicurl: new FormControl(),
      interest: new FormControl()
    });

    this.usersService.getUser(usersService.UserId).subscribe((data) => {
      this.User = data;
    });

    this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
      this.interests = data;
    })

    this.profilesService.getProfileOfUser(usersService.UserId).subscribe((data) => {
      this.Profile = data;
    });
  }

  ngOnInit(): void {
  }

  public edit() {
    console.log(this.editGroup);
    //Get username and Password from logingroup
    var firstname = this.editGroup.get('firstname').value;
    var lastname = this.editGroup.get('lastname').value;
    var email = this.editGroup.get('email').value;
    var username = this.editGroup.get('username').value;
    var region = this.editGroup.get('region').value;
    var phone = this.editGroup.get('phone').value;
    var profilepicurl = this.editGroup.get('profilepicurl').value;

    console.log(lastname + " " + firstname + " " + email + " " + region);

    var profile = new Profile(this.Profile.profileId, firstname, lastname, username, "", "", email, region, profilepicurl, phone, "", "");

    console.log(profile);

    if (this.profilesService.validateUpdateUser(profile)) {
      this.profilesService.updateProfile(profile).subscribe((data) => {
        this.router.navigate(['/profile']);
      })
    }
  }

  public addInterest() {
    var interest = this.editGroup.get('interest').value;
    var add = new Interest(this.usersService.UserId, interest);
    this.editGroup.reset("interest");
    this.interestService.addInterest(add).add(data => {
      this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.interests = data;
      })
    });
  }

  public deleteInterest(interestId) {
    this.interestService.removeInterest(interestId).add(data => {
      this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.interests = data;
      })
    })
  }

}