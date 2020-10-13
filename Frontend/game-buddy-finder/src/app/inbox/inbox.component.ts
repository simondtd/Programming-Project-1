import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/message.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  messages;

  constructor(private messagesService: MessagesService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    // by subscribing a data, it updates the data of the specified variables
    this.messagesService.getMessagesToUser(this.usersService.UserId).subscribe((data) => {
      this.messages = data;
    })
  }

  // function to delete message of a user 
  public deleteMessage(message) {
    // by subscribing a data, it updates the data of the specified variables
    this.messagesService.deleteMessage(message.messageId).subscribe(data => {
      // updates the new inbox because we deleted a message previously
      this.messagesService.getMessagesToUser(this.usersService.UserId).subscribe((data) => {
        this.messages = data;
      })
    })
  }

  // function to view the detailed message so that it redirects the user to /messagepreview
  public viewMessage(message) {
    this.messagesService.currentMessage = message;
    this.router.navigate(['/messagepreview'])
  }

}
