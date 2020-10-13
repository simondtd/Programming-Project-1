import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Interest } from '../models/interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  //The backend interest API URL
  private interestUrl = environment.baseUrl + 'api/interest';

  constructor(private httpClient: HttpClient) { }

  //Gets all interests of a user
  public getInterestsOfUser(userId) {
    return this.httpClient.get(this.interestUrl + '/user/' + userId)
  }

  //Validates an interest by checking its varaibles
  public validateInterest(interest: Interest) {
    if (interest.UserId == null || (interest.Title == null || interest.Title.length == 0)) {
      return false;
    }
    return true;
  }

  //Removes an interest based on the interest id
  public removeInterest(interestId) {
    return this.httpClient.delete(this.interestUrl + "/" + interestId).subscribe((data) => {});
  }

  //Adds an interest after validating it
  public addInterest(interest: Interest) {
    if (this.validateInterest(interest)) {
      return this.httpClient.post(this.interestUrl, interest).subscribe((data) => {});
    }
    else {
      return null;
    }
  }
}
