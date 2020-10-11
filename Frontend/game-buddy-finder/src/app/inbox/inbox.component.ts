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
    this.messagesService.getMessagesToUser(this.usersService.UserId).subscribe((data) => {
      this.messages = data;
    })
  }

  public deleteMessage(message) {
    this.messagesService.deleteMessage(message.messageId).subscribe(data => {
      this.messagesService.getMessagesToUser(this.usersService.UserId).subscribe((data) => {
        this.messages = data;
      })
    })
  }

  public viewMessage(message) {
    this.messagesService.currentMessage = message;
    this.router.navigate(['/messagepreview'])
  }

}
