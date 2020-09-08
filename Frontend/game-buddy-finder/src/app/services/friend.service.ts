import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private friendsUrl = environment.baseUrl + 'api/friend';

  constructor(private httpClient: HttpClient) { }

  //Takes in UserID of the user to remove as friend
  public removeFriend(userId) {
    return this.httpClient.delete(this.friendsUrl + '/' + userId);
  }

  public getFriendsOfUser(id) {
    return this.httpClient.get(this.friendsUrl + '/user/' + id)
  }
}
