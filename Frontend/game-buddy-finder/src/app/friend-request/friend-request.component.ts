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

  ngOnInit(): void {
    this.friendRequestService.getFriendRequestsOfUser(this.usersService.UserId).subscribe((data) => {
      this.friendRequests = data;


    })
  }

}
