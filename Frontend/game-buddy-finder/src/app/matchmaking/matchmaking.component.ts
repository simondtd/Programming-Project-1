import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { UsersService } from '../services/users.service';
import { FriendService } from '../services/friend.service';
import { ProfilesService } from '../services/profiles.service';
import { FriendRequest } from '../models/friendrequest'
import { FriendRequestService } from '../services/friendrequest.service'


@Component({
  selector: 'app-matchmaking',
  templateUrl: './matchmaking.component.html',
  styleUrls: ['./matchmaking.component.scss']
})
export class MatchmakingComponent implements OnInit {
  public matches;

  constructor(private profilesService: ProfilesService, private friendsService: FriendService, private usersService: UsersService, private friendRequestService: FriendRequestService) { }

  ngOnInit(): void {
    this.friendsService.getMatchesOfUser(this.usersService.UserId).subscribe((data) => {
      this.matches = data;
    })
  }

  // a function to view a profile of the matched user 
  public viewProfile(user) {
    this.usersService.searchFriend(user.userName);
  }

  // a function used to send a new friend request 
  public addFriend(receiverId) {
    // sends a new friend request with the required parameters stated in the models
    var friendrequest = new FriendRequest(this.usersService.UserId, receiverId);
    this.friendRequestService.sendFriendRequest(friendrequest);
  }
}
