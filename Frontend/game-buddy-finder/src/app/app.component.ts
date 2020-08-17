import { Component } from '@angular/core';
import { User} from './models/user';
import {UsersService} from './services/users.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PlayWith';

  constructor(private usersService: UsersService, private router:Router) {
    if (usersService.UserId == null) {
      this.router.navigate(['/login'])
    }
  }
}
