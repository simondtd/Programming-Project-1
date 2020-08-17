import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public user;

  constructor(private usersService: UsersService) {
    console.log(this.usersService.UserId)
   }

  ngOnInit(): void {
    this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
      this.user = data;
    })
  }

}
