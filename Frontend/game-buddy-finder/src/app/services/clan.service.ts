import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Clan } from '../models/clan';

@Injectable({
  providedIn: 'root'
})
export class ClanService {
  private clanUrl = environment.baseUrl + 'api/clan';

  constructor(private httpClient: HttpClient) { }

  public getClansOfUser(userId) {
    return this.httpClient.get(this.clanUrl + '/user/' + userId);
  }

  public validateClan(clan: Clan) {
    if (clan.OwnerUserId == null || clan.OwnerUserId == 0) {
      return false;
    }

    if (clan.ClanDescription == null || clan.ClanDescription.length == 0) {
      return false;
    }

    if (clan.ClanName == null || clan.ClanName.length == 0) {
      return false;
    }

    return true;
  }

  public deleteClan(clanid) {
    return this.httpClient.delete(this.clanUrl + '/' + clanid);
  }

  public createClan(clan: Clan) {
    if (this.validateClan(clan)) {
      return this.httpClient.post(this.clanUrl, clan);
    }
    else {
      return null;
    }

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
