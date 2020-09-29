import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { FriendService } from '../services/friend.service'
import { InterestService } from '../services/interest.service';
import { ClanService } from '../services/clan.service';
import { User } from '../models/user'
import { Profile } from '../models/profile'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  public user;
  public profile;
  public friends;
  public interests;
  public clanView;

  constructor(public usersService: UsersService, private clansService: ClanService, private profilesService: ProfilesService, private friendService: FriendService, private interestService: InterestService) { }

  ngOnInit(): void {
    if (this.user == null) {
      this.user = this.usersService.currentUser;
      this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
        this.user = data;
      })
      this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
        this.profile = data;
      })

      this.friendService.getFriendsOfUser(this.usersService.UserId).subscribe((data) => {
        this.friends = data;
      });
      this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.interests = data;
      })
      this.clansService.getClansOfUser(this.usersService.UserId).subscribe((data) => {
        this.clanView = data;
        console.log(data);
      })
    }
    if (this.user != null) {
      this.user = this.usersService.currentUser;
    }
  }
  public removeFriend(userId1, userId2, username) {
    if (confirm("Are you sure to delete " + username)) {
      console.log(username);
      this.friendService.removeFriend(userId1, userId2).subscribe((data) => {
        
      })
    }
  }
}
