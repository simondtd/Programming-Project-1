import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = environment.baseUrl + 'api/user';
  public UserId;
  constructor(private httpClient: HttpClient, private router: Router) { }

  public getUsers() {
    return this.httpClient.get(this.usersUrl);
  }

  public getUser(id) {
    return this.httpClient.get(this.usersUrl + '/' + id);
  }

  public login(username, password) {
    return this.httpClient.get(this.usersUrl + '/login' + '/' + username + '/' + password)
  }

  public authorizeLogin(userId) {
    this.UserId = userId

    this.router.navigate(['/home'])
  }
}

