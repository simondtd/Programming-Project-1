import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import { Profile } from '../models/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private profilesUrl = environment.baseUrl + 'api/profile';
  constructor(private httpClient: HttpClient, private router: Router) { }

  public getProfileOfUser(id) {
    return this.httpClient.get(this.profilesUrl + '/' + 'user' + '/' + id)
  }

  public getProfile(id) {
    return this.httpClient.get(this.profilesUrl + '/' + id)
  }

  public createProfile(_profile) {
    var profile = new Profile();
    profile.userId = 1;
  }
}