import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { FriendService } from '../services/friend.service';
import { FriendRequestService } from '../services/friendrequest.service'
import { InterestService } from '../services/interest.service';
import { User } from '../models/user'
import { Profile } from '../models/profile'
import { FriendRequest } from '../models/friendrequest'
import { Subject } from 'rxjs';


@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.scss']
})
export class FriendSearchComponent implements OnInit, OnDestroy {

  public user;
  public profile;
  public friends;
  public interests;
  public isfriend;

  constructor(private usersService: UsersService, private profilesService: ProfilesService, private interestService: InterestService, private friendService: FriendService, private friendRequestService: FriendRequestService) {
    this.usersService.SearchUserSubject.subscribe(this.updateData.bind(this));
    this.updateData();
  }

  public updateData() {
    this.usersService.getUser(this.usersService.searchUserId).subscribe((data) => {
      this.user = data;
    })
    this.profilesService.getProfileOfUser(this.usersService.searchUserId).subscribe((data) => {
      this.profile = data;
    })
    this.friendService.getFriendsOfUser(this.usersService.searchUserId).subscribe((data) => {
      this.friends = data;
      for (var i = 0; i < this.friends.length; i++) {
        var f = this.friends[i];

        if (f.userId == this.usersService.UserId) {
          this.isfriend = true;
        }
      }
    });
    this.interestService.getInterestsOfUser(this.usersService.searchUserId).subscribe((data) => {
      this.interests = data;
    })
  }

  ngOnDestroy(): void {
    this.usersService.SearchUserSubject.unsubscribe();
  }

  ngOnInit(): void {

  }

  public addFriend(receiverId) {
    var friendrequest = new FriendRequest(this.usersService.UserId, receiverId);
    this.friendRequestService.sendFriendRequest(friendrequest).add(data => {
      window.alert("Sent " + this.user.userName + " a friend request");
    })
  }

  public removeFriend(userId1, userId2, username) {
    if (confirm("Are you sure to remove " + username + " as a friend?")) {
      this.friendService.removeFriend(userId1, userId2).subscribe((data) => {
      })
    }
  }

  public deleteUser(userId) {
    this.usersService.deleteUsers(userId);
    this.usersService.getUsers().subscribe((data) => {
    });
  }
}
