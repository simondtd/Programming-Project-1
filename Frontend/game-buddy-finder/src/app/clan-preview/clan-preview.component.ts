import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { ClanService } from '../services/clan.service';

@Component({
  selector: 'app-clan-preview',
  templateUrl: './clan-preview.component.html',
  styleUrls: ['./clan-preview.component.scss']
})
export class ClanPreviewComponent implements OnInit {

  public clan;
  public user;
  public profile;

  constructor(private usersService: UsersService, private profilesService: ProfilesService, private clansService: ClanService) { }

  ngOnInit(): void {
    if (this.user == null) {
      this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
        this.user = data;
      })
      this.clansService.getClan(this.usersService.UserId).subscribe((data) => {
        this.clan = data;
        console.log(this.usersService.UserId);
      })
      this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {/*this.clanService.OwnerUserId*/
        this.profile = data;
      })
    }
  }

}
