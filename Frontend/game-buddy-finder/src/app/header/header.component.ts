import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { User } from '../models/user'
import { Profile } from '../models/profile'
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private mySubscription: any;
  public loggedIn;
  public profile;
  public user;
  public friendSearchGroup: FormGroup;

  @Input() title: string;

  constructor(public usersService: UsersService, private router: Router, private formBuilder: FormBuilder, public profilesService: ProfilesService) {
    usersService.UserIDSubject.subscribe((data) => {
      this.loggedIn = usersService.UserId;

      this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
        this.user = data;
      });

      this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
        this.profile = data;
      });
    })
    this.friendSearchGroup = new FormGroup({
      username: new FormControl(),
    });
  }

  ngOnInit(): void {

  }
  public logout() {
    this.usersService.logout();
  }
  public search() {
    var username = this.friendSearchGroup.get('username').value;
    this.usersService.searchFriend(username);
    this.friendSearchGroup.reset();
  }
}
