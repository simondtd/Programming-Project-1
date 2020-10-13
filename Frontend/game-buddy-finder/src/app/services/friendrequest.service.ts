import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FriendRequest } from '../models/friendrequest';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {
  //The friend request backend API URL
  private friendRequestUrl = environment.baseUrl + 'api/friendrequest';

  constructor(private httpClient: HttpClient, private router: Router) { }

  //Accepts a friend request with the specified ID
  public acceptFriendRequest(friendRequestid) {
    return this.httpClient.get(this.friendRequestUrl + '/accept/' + friendRequestid);
  }

  //Sends a friend requests, posts it to the backend API
  public sendFriendRequest(friendRequest: FriendRequest) {
    return this.httpClient.post(this.friendRequestUrl, friendRequest).subscribe((data)=> {
    })
  }

  //Rejects a friend request specified by the friendrequest id
  public rejectFriendRequest(friendRequestid) {
    return this.httpClient.get(this.friendRequestUrl + '/reject/' + friendRequestid);
  }

  //Gets all friend requests for a user
  public getFriendRequestsOfUser(id) {
    return this.httpClient.get(this.friendRequestUrl + '/user/' + id);
  }
}
