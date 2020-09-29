import { Component, OnInit } from '@angular/core';
import { ClanService } from '../services/clan.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router'
import { FriendService } from '../services/friend.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  clanView;
  users;
  constructor(private clansService: ClanService, private usersService: UsersService, private router: Router, private friendService: FriendService) { }

  ngOnInit(): void {
    this.clansService.getClans().subscribe((data) => {
      this.clanView = data;
      console.log(data);
    })
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }
  public viewClan(clan) {
    this.clansService.currentClan = clan;
    this.router.navigate(['/clanpreview'])
  }
  public viewUser(users) {
    this.usersService.CurrentUser = users;
    this.router.navigate(['/profile'])
  }
}
