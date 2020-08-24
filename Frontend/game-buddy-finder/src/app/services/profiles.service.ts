import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';
import { Profile } from '../models/profile';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


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


  public createProfile(profile: Profile) {
    //Do error checking here
    return this.httpClient.post<Profile>(this.profilesUrl, profile, httpOptions).pipe(catchError(null));
  }
}