import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClanService {
  private clanUrl = environment.baseUrl + 'api/clan';

  constructor(private httpClient: HttpClient) { }

  public getClansOfUser(userId) {
    return this.httpClient.get(this.clanUrl + '/user/' + userId);
  }

  public getMembersInClan(clanId) {
    return this.httpClient.get(this.clanUrl + '/clan/' + clanId);
  }

  public addUserToClan(userId, clanId) {
    return this.httpClient.get(this.clanUrl + '/add/' + userId + '/' + clanId);
  }

  public removeUserFromClan(userId, clanId) {
    return this.httpClient.get(this.clanUrl + '/remove/' + userId + '/' + clanId);
  }
}
