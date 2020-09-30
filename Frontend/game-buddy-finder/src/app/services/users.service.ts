import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user'
import { Profile } from '../models/profile'

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersUrl = environment.baseUrl + 'api/user';
  public UserId;

  public CurrentUser: User;

  public UserView;

  public searchUserId;

  public UserIDSubject: Subject<boolean> = new Subject<boolean>();
  constructor(private httpClient: HttpClient, private router: Router) { }

  public getUsers() {
    return this.httpClient.get(this.usersUrl);
  }

  public getUser(id) {
    return this.httpClient.get<User>(this.usersUrl + '/' + id);
  }

  public getUserByUsername(username) {
    return this.httpClient.get(this.usersUrl + '/user/' + username);
  }

  public login(username, password) {
    return this.httpClient.get(this.usersUrl + '/login' + '/' + username + '/' + password)
  }

  public authorizeLogin(userId) {

    this.getUser(userId).subscribe((data) => {
      this.UserId = userId;
      this.UserIDSubject.next(userId);
      this.CurrentUser = data;
      this.router.navigate(['/home'])
    });

  }

  public logout() {
    this.UserId = null;
    this.UserIDSubject.next(null);
    this.router.navigate(['/login'])
  }

  public searchFriend(username) {
    this.getUserByUsername(username).subscribe((data) => {
      this.searchUserId = data[0].userId;
      this.router.navigate(['/friendsearch'])
    })
  }
  public deleteUsers(userId: number) {
    return this.httpClient.delete(this.usersUrl + '/' + userId).subscribe((data) => { });
  }
}

