import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  public user;
  public profile;

  constructor(private usersService: UsersService, private profilesService: ProfilesService) {
    console.log(this.usersService.UserId)
  }

  ngOnInit(): void {
    this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
      this.user = data;
    })
    this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
      this.profile = data;
    })
  }

}
