import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { FriendService } from '../services/friend.service'

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  public user;
  public profile;
  public friends;

  constructor(private usersService: UsersService, private profilesService: ProfilesService, private friendService: FriendService) { }

  ngOnInit(): void {
    if (this.user == null) {
      this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
        this.user = data;
      })
      this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
        this.profile = data;
        console.log(this.profile);
      })

      this.friendService.getFriendsOfUser(this.usersService.UserId).subscribe((data) => {
        this.friends = data;
        console.log(this.friends);
      });
    }
  }
}