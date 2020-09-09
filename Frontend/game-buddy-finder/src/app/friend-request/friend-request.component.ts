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

  public accept(id) {
    this.friendRequestService.acceptFriendRequest(id).subscribe((data) => {
      console.log(data);
    })
    console.log(id)

    this.friendRequestService.getFriendRequestsOfUser(this.usersService.UserId).subscribe((data) => {
      this.friendRequests = data;
    })
  }

  public decline(id) {
    this.friendRequestService.rejectFriendRequest(id).subscribe((data) => {
      console.log(data);
    })
    console.log(id)

    this.friendRequestService.getFriendRequestsOfUser(this.usersService.UserId).subscribe((data) => {
      this.friendRequests = data;
    })
  }

  ngOnInit(): void {
    this.friendRequestService.getFriendRequestsOfUser(this.usersService.UserId).subscribe((data) => {
      this.friendRequests = data;
    })
  }

}
