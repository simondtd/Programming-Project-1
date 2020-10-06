import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { FriendService } from '../services/friend.service'
import { InterestService } from '../services/interest.service';
import { ClanService } from '../services/clan.service';
import { MessagesService } from '../services/message.service';
import { User } from '../models/user'
import { Message } from '../models/message'
import { Profile } from '../models/profile'
import { Subject } from 'rxjs';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

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

  public users = Array<User>();
  public messages = Array<Message>();

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
    var content = "";

    for (var user of this.users) {
      content += "USERNAME: " + user.userName + "\n";
      content += "CREATION TIME: " + user.creationTime + "\n\n";

      content += "SENT MESSAGES: \n\n"

      for (var message of this.messages) {
        if (message.senderId == user.userId) {
          content += "TO: " + message.receiverUsername + "\n";
          content += "DATE: " + message.sendTime + "\n";
          content += "CONTENT:\n";
          content += message.content + "\n";
        }
      }
      content += "-------------\n";
    }
    let docDefinition = {
      header: 'C#Corner PDF Header',
      content: content
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
