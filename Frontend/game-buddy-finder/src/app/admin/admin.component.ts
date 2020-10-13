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

  // array for the user and the message
  public users = Array<User>();
  public messages = Array<Message>();

  constructor(private messageService: MessagesService, private clansService: ClanService, public usersService: UsersService, private router: Router, private friendService: FriendService) { }

  ngOnInit(): void {
    // condition if the current user with type 1
    if (this.usersService.CurrentUser && this.usersService.CurrentUser.userType == 1) {
      // this is for getting all the users
      this.usersService.getUsers().subscribe(data => {
        this.users = data;
      })

      // this is for getting all the messages
      this.messageService.getMessages().subscribe(data => {
        this.messages = data;
      })
    }

    // this is for getting all the clans
    this.clansService.getClans().subscribe((data) => {
      this.clanView = data;
    })

    // this is for getting all the users
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    })

    //this is for getting all the messages
    this.messageService.getMessages().subscribe(data => {
      this.messages = data;
    })
  }

  //this public function for viewing users
  public viewUser(user) {
    this.usersService.searchFriend(user.userName);
  }
  //this public function for viewing all the clans
  //after that, it will direct to clan preview
  public viewClan(clan) {
    this.clansService.currentClan = clan;
    this.router.navigate(['/clanpreview']);
  }

  //this function for generating the PDF file
  public generatePdf() {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var content = "";

    // this loop to print all username, creation time, and messages as well
    for (var user of this.users) {
      content += "USERNAME: " + user.userName + "\n";
      content += "CREATION TIME: " + user.creationTime + "\n\n";
      var hasMessages = false;
      //this is messaging loop
      for (var message of this.messages) {
        //this condition if the sender id message equal with userId, it will be true
        if (message.senderId == user.userId) {
          hasMessages = true;
        }
      }

      //this condition, if the message exist will print the message and if there no message will print no message
      if (hasMessages) {
        content += "SENT MESSAGES: \n\n"
        for (var message of this.messages) {
          if (message.senderId == user.userId) {
            content += "TO: " + message.receiverUsername + "\n";
            content += "DATE: " + message.sendTime + "\n";
            content += "CONTENT:\n";
            content += message.content + "\n";
          }
        }
      }
      else {
        content += "NO MESSAGES: \n\n"
      }

      content += "-------------\n";
    }
    //this for the header on the PDF file
    let docDefinition = {
      header: 'PlayWith Admin -  User Log',
      content: content
    };
    //for naming the PDF file
    pdfMake.createPdf(docDefinition).download("User Log.pdf");
  }
}

