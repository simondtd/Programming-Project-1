import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

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
