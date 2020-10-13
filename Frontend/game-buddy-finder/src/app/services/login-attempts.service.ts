import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginAttemptsService {
  //The backend API URl
  private loginAttemptsUrl = environment.baseUrl + 'api/loginattempt';

  constructor(private httpClient : HttpClient) { }

  //Gets all login attempts from teh backend
  public getLoginAttempts() {
    return this.httpClient.get(this.loginAttemptsUrl)
  }

  //Gets a list of login attempts for the specified userid
  public getLoginAttemptsOfUser(id) {
    return this.httpClient.get(this.loginAttemptsUrl + '/user/' + id)
  }
}
