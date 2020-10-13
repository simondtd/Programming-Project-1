import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { MessagesService } from '../services/message.service';
import { User } from '../models/user'
import { Profile } from '../models/profile'
import { Message } from '../models/message'
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.scss']
})
export class MessagePreviewComponent implements OnInit {

  public user;
  public profile;
  public message;

  constructor(private usersService: UsersService, private router: Router, private profilesService: ProfilesService, private messagesService: MessagesService) { }

  ngOnInit(): void {
    if (this.user == null) {
      // by subscribing a data, it updates the data of the specified variables
      this.messagesService.getMessagesToUser(this.usersService.UserId).subscribe((data) => {
        this.message = this.messagesService.currentMessage;
        this.usersService.getUser(this.message.senderId).subscribe((data) => {
          this.user = data;
        })
        this.profilesService.getProfileOfUser(this.message.senderId).subscribe((data) => {
          this.profile = data;
        })
      })
    }
  }

  // a function to reply a message 
  public reply(sender) {
    // to keep the username of the sender 
    this.messagesService.ReplyUser = sender;
    // redirects the user to /sendmessage
    this.router.navigate(['/sendmessage']);
  }

}
