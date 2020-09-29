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
  public friendSearchGroup: FormGroup;

  @Input() title: string;

  constructor(public usersService: UsersService, private router: Router, private formBuilder: FormBuilder) {
    usersService.UserIDSubject.subscribe((data) => {
      this.loggedIn = usersService.UserId;
    })
    this.friendSearchGroup = new FormGroup({
      username: new FormControl(),
    });
  }

  public logout() {
    this.usersService.logout();
  }
  public search() {
    var username = this.friendSearchGroup.get('username').value;
    this.usersService.searchFriend(username);
    console.log(username);
  }
}
