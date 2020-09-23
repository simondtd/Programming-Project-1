import { Component, OnInit } from '@angular/core';
import * as SignalR from '@aspnet/signalr';
import { env } from 'process';
import { ChatMessage } from '../models/chatmessage';
import { environment } from '../../environments/environment';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  connection: SignalR.HubConnection;
  connectionUrl = environment.baseUrl + "chatHub";

  public Messages: Array<string>;

  constructor(private usersService: UsersService, private profilesService: ProfilesService) { }

  ngOnInit(): void {
    this.connection = new SignalR.HubConnectionBuilder()
      .withUrl(this.connectionUrl)
      .build();

    this.Messages = new Array<string>();

    this.connection.on('ReceiveMessage', this.receiveMessage.bind(this));
    this.connection.on('Init', () => {
      var user = this.usersService.CurrentUser;
      console.log(user);
      this.connection.invoke("JoinChat", 1, user.userName);
    });
    
    this.connection.start();
  }

  public receiveMessage(message) {
    this.Messages.push(message);
  }

  public sendTestMessage() {
    var message = "HEY TEST";
    this.connection.invoke('SendMessage', message);
  }
}
