import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Interest } from '../models/interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  private interestUrl = environment.baseUrl + 'api/interest';

  constructor(private httpClient: HttpClient) { }

  public getInterestsOfUser(userId) {
    return this.httpClient.get(this.interestUrl + '/user/' + userId)
  }

  public validateInterest(interest: Interest) {
    if (interest.UserId == null || (interest.Title == null || interest.Title.length == 0)) {
      return false;
    }

    return true;
  }

  public addInterest(interest: Interest) {
    if (this.validateInterest(interest)) {
      return this.httpClient.post(this.interestUrl, interest);
    }
    else {
      return null;
    }
  }
}
