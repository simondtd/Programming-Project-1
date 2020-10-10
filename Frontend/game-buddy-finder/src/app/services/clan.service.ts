import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Clan } from '../models/clan';

@Injectable({
  providedIn: 'root'
})
export class ClanService {
  private clanUrl = environment.baseUrl + 'api/clan';
  public currentClan;

  public UserClans = Array<Clan>();

  constructor(private httpClient: HttpClient) { }

  public getClansOfUser(userId) {
    var obs = this.httpClient.get<Clan[]>(this.clanUrl + '/user/' + userId);

    obs.subscribe(data => {
      this.UserClans = data;
    })
    return obs;
  }

  public getClan(id) { /*clan id*/
    return this.httpClient.get<Clan>(this.clanUrl + '/' + id);
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

    if (clan.ClanRegion == null || clan.ClanRegion.length == 0) {
      return false;
    }

    if (clan.ClanProfilePicUrl == null || clan.ClanProfilePicUrl.length == 0) {
      clan.ClanProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }

    return true;
  }

  public deleteClan(clanid) {
    return this.httpClient.delete(this.clanUrl + '/' + clanid);
  }

  public createClan(clan: Clan) {
    
    var obs = null;
    if (this.validateClan(clan)) {
      obs = this.httpClient.post<any>(this.clanUrl, clan);

      obs.subscribe(data => {});
    }
    return obs;

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

  public getClans() {
    return this.httpClient.get(this.clanUrl);
  }
}
