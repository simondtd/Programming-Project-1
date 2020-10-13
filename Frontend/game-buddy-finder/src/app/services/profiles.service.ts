import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  //The profile backend API URØ
  private profilesUrl = environment.baseUrl + 'api/profile';
  //The users profile
  public Profile: Profile;
  private postId;
  constructor(private httpClient: HttpClient, private router: Router) { }

  //returns the profile of a certain user
  public getProfileOfUser(id) {
    return this.httpClient.get<Profile>(this.profilesUrl + '/' + 'user' + '/' + id)
  }

  //Gets the profile by its profile id
  public getProfile(id) {
    return this.httpClient.get(this.profilesUrl + '/' + id)
  }

  //Validates a profile to be updated in the backend. doesnt tkae password int oaccont
  public validateUpdateUser(profile: Profile) {

    if (profile.UserName == null || (profile.UserName.length < 3 || profile.UserName.length > 12)) {
      return false;
    }

    if (profile.FirstName == null || profile.FirstName.length == 0) {
      return false;
    }

    if (profile.LastName == null || profile.LastName.length == 0) {
      return false;
    }

    if (profile.EmailAddress == null || profile.EmailAddress.length == 0) {
      return false;
    }

    if (profile.Region == null || profile.Region.length == 0) {
      return false;
    }

    if (profile.ProfilePicUrl == null || profile.ProfilePicUrl.length == 0) {
      profile.ProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }
 
    return true;
  }

  //validates a user when its registered. takes varaibles into account
  public validateUser(profile: Profile) {
    if ((profile.PasswordHash == null || profile.RePasswordHash == null) || profile.PasswordHash != profile.RePasswordHash) {
      return false;
    }

    if (profile.UserName == null || (profile.UserName.length < 3 || profile.UserName.length > 12)) {
      return false;
    }

    if (profile.FirstName == null || profile.FirstName.length == 0) {
      return false;
    }

    if (profile.LastName == null || profile.LastName.length == 0) {
      return false;
    }

    if (profile.EmailAddress == null || profile.EmailAddress.length == 0) {
      return false;
    }

    if (profile.Region == null || profile.Region.length == 0) {
      return false;
    }

    if (profile.ProfilePicUrl == null || profile.ProfilePicUrl.length == 0) {
      profile.ProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    }
 
    return true;
  }

  //Updates a profile, POST Request
  public updateProfile(profile: Profile) {
    return this.httpClient.put<any>(this.profilesUrl + '/' + profile.ProfileId, profile);
  }

  //createa new profile, POST Request
  public createProfile(profile: Profile) {
    return this.httpClient.post<any>(this.profilesUrl, profile)
  }
}