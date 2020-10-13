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

  //public variable
  public clan;
  public members;
  public isMember;
  public isOwner;
  public userId;

  constructor( public usersService: UsersService, private clansService: ClanService) { }
 
  ngOnInit(): void {
    //this condition when the userId is not equal with null
    if (this.usersService.UserId != null) {
      this.userId = this.usersService.UserId;
      this.clan = this.clansService.currentClan;
      this.isOwner = (this.userId == this.clan.ownerUserId);

      //for getting all the members of the clan
      this.clansService.getMembersInClan(this.clan.clanId).subscribe((data) => {
        this.members = data;
        //lopping when the members increase
        for (var i = 0; i < this.members.length; i++) {
          var member = this.members[i];
          if (member.userId == this.usersService.UserId) {
            this.isMember = true;
          }
        }

      })
    }
  }

  public chatWithClan(clanId) {
    
  }

  // this function for viewing all user friends
  public viewFriend(friend) {
    this.usersService.searchFriend(friend.userName);
  }

  //this function for deleting clan
  public deleteClan(clanId) {
    this.clansService.deleteClan(clanId).subscribe((data) => {});
  }

  //this function for joining to the new clan
  public join(clanId) {
    var userId = this.usersService.UserId;
    this.clansService.addUserToClan(userId, clanId).subscribe((data) => {
    })
  }

}
