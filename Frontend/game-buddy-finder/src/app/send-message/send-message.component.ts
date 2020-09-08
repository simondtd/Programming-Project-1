import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/message.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Message } from '../models/message';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  public messageGroup: FormGroup;

  constructor(private messageService: MessagesService, private formBuilder: FormBuilder) {
    this.messageGroup = new FormGroup({
      reciever: new FormControl(),
      subject: new FormControl(),
      message: new FormControl()
    }); 
  }

  ngOnInit(): void {
  }


public newMessage() {
  //Get username and Password from logingroup
  var reciever = this.messageGroup.get('reciever').value;
  var subject = this.messageGroup.get('subject').value;
  var message = this.messageGroup.get('message').value;

  this.messageService.sendMessage
}
}
