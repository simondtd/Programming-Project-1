import { Component, OnInit, Input } from '@angular/core';
import { UsersService} from '../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private mySubscription: any;
  public loggedIn;

  @Input() title: string;



  constructor(private usersService: UsersService, private router:Router) {
    usersService.UserIDSubject.subscribe((data) => {
      this.loggedIn = usersService.UserId;
    })
  }

  public logout() {
    this.usersService.logout();
  }

}
