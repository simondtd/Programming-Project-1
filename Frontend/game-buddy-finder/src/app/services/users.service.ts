import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = environment.baseUrl + 'api/users';
  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get(this.usersUrl);
  }

  public getUser(id : number) {
    return this.httpClient.get(this.usersUrl + '/' + id);
  }
}
