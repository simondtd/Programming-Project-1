import { Component, OnInit } from '@angular/core';
import { ClanService } from '../services/clan.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router'
import { FriendService } from '../services/friend.service'
import { ProfilesService } from '../services/profiles.service';
import { InterestService } from '../services/interest.service';
import { MessagesService } from '../services/message.service';
import { User } from '../models/user'
import { Message } from '../models/message'
import { Profile } from '../models/profile'
import { Subject } from 'rxjs';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  clanView;

  public users = Array<User>();
  public messages = Array<Message>();

  constructor(private messageService: MessagesService,private clansService: ClanService, public usersService: UsersService, private router: Router, private friendService: FriendService) { }

  ngOnInit(): void {
    if (this.usersService.CurrentUser.userType == 1) {
      this.usersService.getUsers().subscribe(data => {
        this.users = data;
      })

      this.messageService.getMessages().subscribe(data => {
        this.messages = data;
      })
    }

    this.clansService.getClans().subscribe((data) => {
      this.clanView = data;
    })
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    })
    this.messageService.getMessages().subscribe(data => {
      this.messages = data;
    })
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
      header: 'PlayWith Admin -  User Log',
      content: content
    };

    pdfMake.createPdf(docDefinition).download("User Log.pdf");
  }

  public viewClan(clan) {
    this.clansService.currentClan = clan;
    this.router.navigate(['/clanpreview'])
  }
  public viewUser(users) {
    this.usersService.searchFriend(users.userName);
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
      header: 'PlayWith Admin -  User Log',
      content: content
    };

    pdfMake.createPdf(docDefinition).download("User Log.pdf");
  }
}

