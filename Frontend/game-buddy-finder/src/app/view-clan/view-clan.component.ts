import { Component, OnInit } from '@angular/core';
import { ClanService } from '../services/clan.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-clan',
  templateUrl: './view-clan.component.html',
  styleUrls: ['./view-clan.component.scss']
})

export class ViewClanComponent implements OnInit {

  clanView;
  
  constructor(private clansService: ClanService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.clansService.getClans().subscribe((data) => {
      this.clanView = data;
      console.log(data);
    })
  }
  public viewClan(clan) {
    this.clansService.currentClan = clan;
    this.router.navigate(['/clanpreview'])
  }

}
