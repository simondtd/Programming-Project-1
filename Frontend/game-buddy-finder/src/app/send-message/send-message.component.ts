import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/message.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Message } from '../models/message';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  public messageGroup: FormGroup;

  constructor(private router: Router, private messageService: MessagesService, private formBuilder: FormBuilder, private usersService: UsersService) {
    // a formgroup for message to connect the html input to the component.ts
    this.messageGroup = new FormGroup({
      reciever: new FormControl(),
      subject: new FormControl(),
      content: new FormControl()
    });

    this.messageGroup.get('reciever').setValue(this.messageService.ReplyUser);
  }

  ngOnInit(): void {
  }

  // a function for new message 
  public newMessage() {
    // a variable to store the info that a user input using a formgroup in the html
    var reciever = this.messageGroup.get('reciever').value;
    var subject = this.messageGroup.get('subject').value;
    var content = this.messageGroup.get('content').value;

    // search for the inputted username of the user 
    this.usersService.getUserByUsername(reciever).subscribe((data) => {
      // returns an array and we take the first data
      var receiverId = data[0].userId

      var senderId = this.usersService.UserId;

      // creating a new message. The parameters that are needed are stated in models 
      var message = new Message(senderId, receiverId, subject, content);
      // if the message is validated, the user will be redirected to their inbox
      if (this.messageService.validateMessage(message)) {
        this.messageService.sendMessage(message).subscribe(data => {
          this.router.navigate(['/inbox']);
        });
      }
      else {
        window.alert("Invalid Input");
      }

    });
  }
}
