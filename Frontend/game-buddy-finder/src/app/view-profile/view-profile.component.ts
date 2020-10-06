import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { FriendService } from '../services/friend.service'
import { InterestService } from '../services/interest.service';
import { ClanService } from '../services/clan.service';
import { MessagesService } from '../services/message.service';
import { User } from '../models/user'
import { Profile } from '../models/profile'
import { Subject } from 'rxjs';
import  pdfMake  from "pdfmake/build/pdfmake";
import  pdfFonts  from "pdfmake/build/vfs_fonts";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  public user;
  public profile;
  public friends;
  public interests;
  public clanView;

  public users = null;
  public messages = null;

  constructor(public usersService: UsersService, private clansService: ClanService, private messageService: MessagesService, private profilesService: ProfilesService, private friendService: FriendService, private interestService: InterestService) { }

  ngOnInit(): void {
    if (this.user == null) {
      if (this.usersService.CurrentUser.userType == 1) {
        this.usersService.getUsers().subscribe(data => {
          this.users = data;
        })

        this.messageService.getMessages().subscribe(data => {
          this.messages = data;
        })
      }
      this.user = this.usersService.UserView;
      this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
        this.user = data;
      })
      this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
        this.profile = data;
      })

      this.friendService.getFriendsOfUser(this.usersService.UserId).subscribe((data) => {
        this.friends = data;
      });
      this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.interests = data;
      })
      this.clansService.getClansOfUser(this.usersService.UserId).subscribe((data) => {
        this.clanView = data;
      })
    }
  }
  public generatePdf() {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let docDefinition = {  
      header: 'C#Corner PDF Header',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'  
    };  
   
    pdfMake.createPdf(docDefinition).download();
  }
  public removeFriend(userId1, userId2, username) {
    if (confirm("Are you sure to delete " + username)) {
      this.friendService.removeFriend(userId1, userId2).subscribe((data) => {

      })
    }
  }
}
