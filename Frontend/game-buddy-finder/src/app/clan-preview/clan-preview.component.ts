import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ClanService } from '../services/clan.service';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-clan-preview',
  templateUrl: './clan-preview.component.html',
  styleUrls: ['./clan-preview.component.scss']
})
export class ClanPreviewComponent implements OnInit {

  public clan;
  public members;
  public isMember;
  public isOwner;
  public userId;

  constructor(private usersService: UsersService, private clansService: ClanService) { }

  ngOnInit(): void {
    if (this.usersService.UserId != null) {

      this.userId = this.usersService.UserId;
      this.clan = this.clansService.currentClan;
      this.isOwner = (this.userId == this.clan.ownerUserId);

      this.clansService.getMembersInClan(this.clan.clanId).subscribe((data) => {
        this.members = data;

        for (var i = 0; i < this.members.length; i++) {
          var member = this.members[i];

          console.log(member);

          if (member.userId == this.usersService.UserId) {
            this.isMember = true;
          }
        }

      })
    }
  }

  public chatWithClan(clanId) {
    
  }

  public deleteClan(clanId) {
    this.clansService.deleteClan(clanId).subscribe((data) => {});
  }

  public join(clanId) {
    var userId = this.usersService.UserId;
    this.clansService.addUserToClan(userId, clanId).subscribe((data) => {
      console.log(data);
    })
    console.log(userId, clanId)
  }

}
