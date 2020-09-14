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

  constructor(private usersService: UsersService, private profilesService: ProfilesService, private clansService: ClanService) { }

  ngOnInit(): void {
    if (this.user == null) {
      this.clansService.getClan(this.usersService.UserId).subscribe((data) => {
        this.user = data;
      })
    }
/*    if (this.user == null) {
      this.messagesService.getMessagesToUser(this.usersService.UserId).subscribe((data) => {
        this.message = this.messagesService.currentMessage;
        console.log(this.message);

        this.usersService.getUser(this.message.senderId).subscribe((data) => {
          this.user = data;
        })
        this.profilesService.getProfileOfUser(this.message.senderId).subscribe((data) => {
          this.profile = data;
        })
      })
    }*/
  }

}
