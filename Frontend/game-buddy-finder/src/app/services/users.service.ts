import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user'
import { Profile } from '../models/profile'
import { ProfilesService } from '../services/profiles.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  //The user backend API URL
  private usersUrl = environment.baseUrl + 'api/user';

  //The logged in user id
  public UserId;

  //The currently logged in user
  public CurrentUser: User;
  public UserView;

  //The user searched for
  public SearchUser;
  public SearchUserSubject: Subject<any> = new Subject<any>();

  //The id to search for
  public searchUserId;

  public UserIDSubject: Subject<boolean> = new Subject<boolean>();
  constructor(private httpClient: HttpClient, private router: Router, private profileService: ProfilesService) { }

  //Gets all users in the database
  public getUsers() {
    return this.httpClient.get<User[]>(this.usersUrl);
  }

  //Gets a user with the specifeid id
  public getUser(id) {
    return this.httpClient.get<User>(this.usersUrl + '/' + id);
  }

  //gets a user by its username
  public getUserByUsername(username) {
    return this.httpClient.get(this.usersUrl + '/user/' + username);
  }

  //logs in using username and password
  public login(username, password) {
    return this.httpClient.get(this.usersUrl + '/login/' + username + '/' + password)
  }
  
  //Resets the password using the specified parameters
  public resetPassword(username, secretQuestion, secretAnswer, newPassword) {

    return this.httpClient.get(this.usersUrl + '/reset/' + username + '/' + secretQuestion + '/' + secretAnswer + '/' + newPassword);
  }

  //sets the login id and retireves the profile
  public authorizeLogin(userId) {

    this.getUser(userId).subscribe((data) => {
      this.UserId = userId;
      this.UserIDSubject.next(userId);
      this.CurrentUser = data;
      this.router.navigate(['/home'])

      this.profileService.getProfileOfUser(userId).subscribe(data => {
        this.profileService.Profile = data;
      })
    });

  }

  //logs out. resets varaibles
  public logout() {
    this.UserId = null;
    this.UserIDSubject.next(null);
    this.router.navigate(['/login'])
  }

  //search for a user by username
  public searchFriend(username) {
    this.getUserByUsername(username).subscribe((data) => {

      if ((data as any).length == 0) {
        window.alert("User not found");
      }
      else {
        this.searchUserId = data[0].userId;
        this.SearchUserSubject.next(this.searchUserId);
        this.router.navigate(['/friendsearch']);
      }

    })
  }
  //Deletes a user by its userId
  public deleteUsers(userId: number) {
    return this.httpClient.delete(this.usersUrl + '/' + userId).subscribe((data) => { });
  }
}

