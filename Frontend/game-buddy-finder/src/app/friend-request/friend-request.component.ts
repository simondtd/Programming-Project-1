import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FriendRequestService } from '../services/friendrequest.service';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {
  public friendRequests;
  constructor(private friendRequestService: FriendRequestService, private usersService: UsersService) { }

  // function to accept the incomming friend request by their user id 
  public accept(id) {
    this.friendRequestService.acceptFriendRequest(id).subscribe((data) => {
      // updating the view of the friend list of the user 
      this.friendRequestService.getFriendRequestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.friendRequests = data;
      })
    })

  }

  // function to decline the incomming friend request by their user id 
  public decline(id) {
    this.friendRequestService.rejectFriendRequest(id).subscribe((data) => {
      // updating the view of the friend list of the user 
      this.friendRequestService.getFriendRequestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.friendRequests = data;
      })
    })


  }

  ngOnInit(): void {
    // by subscribing a data, it updates the data of the specified variables
    this.friendRequestService.getFriendRequestsOfUser(this.usersService.UserId).subscribe((data) => {
      this.friendRequests = data;
    })
  }

}
