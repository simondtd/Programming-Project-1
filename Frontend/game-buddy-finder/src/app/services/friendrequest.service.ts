import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FriendRequest } from '../models/friendrequest';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {
  private friendRequestUrl = environment.baseUrl + 'api/friendrequest';

  constructor(private httpClient: HttpClient) { }

  public acceptFriendRequest(friendRequestid) {
    return this.httpClient.get(this.friendRequestUrl + '/accept/' + friendRequestid);
  }

  public sendFriendRequest(friendRequest: FriendRequest) {
    return this.httpClient.post(this.friendRequestUrl, friendRequest).subscribe((data)=> {
      console.log(data);
    })
  }

  public rejectFriendRequest(friendRequestid) {
    return this.httpClient.get(this.friendRequestUrl + '/reject/' + friendRequestid);
  }

  public getFriendRequestsOfUser(id) {
    return this.httpClient.get(this.friendRequestUrl + '/user/' + id);
  }
}
