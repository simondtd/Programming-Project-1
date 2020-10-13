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
  //public variable
  public editGroup: FormGroup;
  public Profile;
  public User;
  public interests;

  constructor(private router: Router, private profilesService: ProfilesService, private formBuilder: FormBuilder, private usersService: UsersService, private interestService: InterestService) {
    this.editGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      region: new FormControl(),
      phone: new FormControl(),
      profilepicurl: new FormControl(),
      interest: new FormControl()
    });

    this.updateData();
  }

  ngOnInit(): void {
  }
  //this fucntion for updating on edit profile
  public updateData() {
    //this is for getting the users data
    this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
      this.User = data;
    });
    //this is for getting interest of the user
    this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
      this.interests = data;
    })
    //this is for getting all value on the profile
    this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
      this.Profile = data;
      this.editGroup.get('firstname').setValue(this.Profile.firstName);
      this.editGroup.get('lastname').setValue(this.Profile.lastName);
      this.editGroup.get('email').setValue(this.Profile.email);
      this.editGroup.get('region').setValue(this.Profile.region);
      this.editGroup.get('phone').setValue(this.Profile.phoneNumber);
      this.editGroup.get('profilepicurl').setValue(this.Profile.profilePicUrl);
    });
  }

  //this function for updating the value profile
  public edit() {
    //Get username and Password from logingroup

    //this is all the value of the profile
    var firstname = this.editGroup.get('firstname').value;
    var lastname = this.editGroup.get('lastname').value;
    var email = this.editGroup.get('email').value;
    var region = this.editGroup.get('region').value;
    var phone = this.editGroup.get('phone').value;
    var profilepicurl = this.editGroup.get('profilepicurl').value;

    var profile = new Profile(this.Profile.profileId, firstname, lastname, "username", "", "", email, region, profilepicurl, phone, "", "");

    //this conditon if the user already update their profile information
    //and click the button, it will direct to profile
    if (this.profilesService.validateUpdateUser(profile)) {
      this.profilesService.updateProfile(profile).subscribe((data) => {
        this.updateData();
        this.router.navigate(['/profile']);
      })
    }
  }

  //this function for adding interest on their profile
  public addInterest() {
    var interest = this.editGroup.get('interest').value;
    var add = new Interest(this.usersService.UserId, interest);
    this.editGroup.reset("interest");

    //this condition when the user already add the interest
    //it will added on their profile
    if (this.interestService.validateInterest(add)) {
      this.interestService.addInterest(add).add(data => {
        this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
          this.interests = data;
        })
      });
    }
    else {
      window.alert("Invalid Input");
    }

  }

  //this function for deleting user interest
  //after the user click delete button
  //the interest will earased on their profile
  public deleteInterest(interestId) {
    this.interestService.removeInterest(interestId).add(data => {
      this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.interests = data;
      })
    })
  }

}
