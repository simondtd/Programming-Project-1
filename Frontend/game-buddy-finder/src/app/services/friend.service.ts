import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private friendsUrl = environment.baseUrl + 'api/friend';

  constructor(private httpClient: HttpClient) { }

  public removeFriend(userId1, userId2) {
    return this.httpClient.delete(this.friendsUrl + '/' + userId1 + '/' + userId2);
  }

  public getFriendsOfUser(userId) {
    return this.httpClient.get(this.friendsUrl + '/user/' + userId)
  }
}
