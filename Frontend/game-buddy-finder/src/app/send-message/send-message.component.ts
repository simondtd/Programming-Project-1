import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/message.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Message } from '../models/message';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  public messageGroup: FormGroup;

  constructor(private messageService: MessagesService, private formBuilder: FormBuilder, private usersService: UsersService) {
    this.messageGroup = new FormGroup({
      reciever: new FormControl(),
      subject: new FormControl(),
      content: new FormControl()
    }); 
  }

  ngOnInit(): void {
  }


public newMessage() { 
  var reciever = this.messageGroup.get('reciever').value;
  var subject = this.messageGroup.get('subject').value;
  var content = this.messageGroup.get('content').value;



    this.usersService.getUserByUsername(reciever).subscribe((data) => {
    var receiverId = data[0].userId

    console.log(receiverId);

    var senderId = this.usersService.UserId;

      console.log(senderId);

      console.log(subject);
      console.log(content);

    var message = new Message(senderId, receiverId, subject, content);
    this.messageService.sendMessage(message);
  });
}
}
