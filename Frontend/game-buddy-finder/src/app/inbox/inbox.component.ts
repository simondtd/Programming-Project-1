import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/message.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  messages; 

  constructor(private messagesService: MessagesService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.messagesService.getMessagesToUser(this.usersService.UserId).subscribe((data) => {
      this.messages = data;
    })
  }

}
