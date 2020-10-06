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

  constructor(private profilesService: ProfilesService,private friendsService: FriendService, private usersService: UsersService, private friendRequestService: FriendRequestService) {  }

  ngOnInit(): void {
    this.friendsService.getMatchesOfUser(this.usersService.UserId).subscribe((data) => {
      this.matches = data;
    })
  }

  public viewProfile(userId) {
    
  }

  public addFriend(receiverId) {
    var friendrequest = new FriendRequest(this.usersService.UserId, receiverId);
    this.friendRequestService.sendFriendRequest(friendrequest);
  }
}
