import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  //the friend API URL
  private friendsUrl = environment.baseUrl + 'api/friend';

  public FriendsOfUser: Array<User>;

  constructor(private httpClient: HttpClient) { }

  //Removes a friend relationship between the two user ids
  public removeFriend(userId1, userId2) {
    return this.httpClient.delete(this.friendsUrl + '/' + userId1 + '/' + userId2);
  }

  //Returns a list of matching users based on interests
  public getMatchesOfUser(userId) {
    return this.httpClient.get(this.friendsUrl + '/matches/' + userId)
  }

  //Gets all friends of the user specified by the userId
  public getFriendsOfUser(userId) {
    var obs = this.httpClient.get<User[]>(this.friendsUrl + '/user/' + userId)
    obs.subscribe(data => {
      this.FriendsOfUser = data;
    })

    return obs;
  }
}
