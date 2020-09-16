import { Component, OnInit } from '@angular/core';
import { ClanService } from '../services/clan.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-view-clan',
  templateUrl: './view-clan.component.html',
  styleUrls: ['./view-clan.component.scss']
})

export class ViewClanComponent implements OnInit {

  public clanView;
  public view;
  
  constructor(private clansService: ClanService, public usersService: UsersService) { }

  ngOnInit(): void {
    this.clansService.getClansOfUser(this.usersService.UserId).subscribe((data) => {
      this.clanView = data;
      console.log(data);
    })
  }


}
