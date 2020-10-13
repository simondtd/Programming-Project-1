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
export class FriendSearchComponent {

  //Variables to display for the searched user
  public user;
  public profile;
  public friends;
  public interests;
  public isfriend;

  private SearchSubscription;

  constructor(private usersService: UsersService, private profilesService: ProfilesService, private interestService: InterestService, private friendService: FriendService, private friendRequestService: FriendRequestService) {

    //Updates the view after searching on the same page
    this.SearchSubscription = this.usersService.SearchUserSubject.subscribe((data) => {
      this.updateData();
    });
    //sets the initial data
    this.updateData();
  }

  public updateData() {
    //fetches the user, interests and friends of teh search for user, stores in variables
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

  //Adds this user as a friend. sends  friend request
  public addFriend(receiverId) {
    var friendrequest = new FriendRequest(this.usersService.UserId, receiverId);
    this.friendRequestService.sendFriendRequest(friendrequest).add(data => {
      window.alert("Sent " + this.user.userName + " a friend request");
    })
  }

  //Removes this user as a friend
  public removeFriend(userId1, userId2, username) {
    if (confirm("Are you sure to remove " + username + " as a friend?")) {
      this.friendService.removeFriend(userId1, userId2).subscribe((data) => {
      })
    }
  }

  //Delete this user. only useable by admins
  public deleteUser(userId) {
    this.usersService.deleteUsers(userId);
    this.usersService.getUsers().subscribe((data) => {
    });
  }
}
