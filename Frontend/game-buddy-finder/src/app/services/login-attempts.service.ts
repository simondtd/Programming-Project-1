import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginAttemptsService {
  private loginAttemptsUrl = environment.baseUrl + 'api/loginattempt';

  constructor(private httpClient : HttpClient) { }

  public getLoginAttempts() {
    return this.httpClient.get(this.loginAttemptsUrl)
  }

  public getLoginAttemptsOfUser(id) {
    return this.httpClient.get(this.loginAttemptsUrl + '/user/' + id)
  }
}
