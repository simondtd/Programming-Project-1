import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { User } from '../models/user'
import { Profile } from '../models/profile'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.scss']
})
export class FriendSearchComponent implements OnInit {

  public user;
  public profile;

  constructor(private usersService: UsersService, private profilesService: ProfilesService) {
    if (this.user == null) {
      console.log("USER: " + this.usersService.searchUserId)
      this.usersService.getUser(this.usersService.searchUserId).subscribe((data) => {
        this.user = data;
      })
      this.profilesService.getProfileOfUser(this.usersService.searchUserId).subscribe((data) => {
        this.profile = data;
        console.log(this.profile);
      })
    }
   }

  ngOnInit(): void {

  }

}
