import { Component, OnDestroy, OnInit, AfterViewChecked } from '@angular/core';
import * as SignalR from '@aspnet/signalr';
import { ChatMessage } from '../models/chatmessage';
import { environment } from '../../environments/environment';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { ClanService } from '../services/clan.service';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked  {

  //the connection our realtime chat uses
  connection: SignalR.HubConnection;
  //the url the connection connects to
  connectionUrl = environment.baseUrl + "chatHub";

  //the chat input box
  public chatGroup: FormGroup;

  //list of messages
  public Messages: Array<ChatMessage>;
  //list of online users, not currently implemented
  public OnlineUsers: Array<string>;

  constructor(public usersService: UsersService, private profilesService: ProfilesService, public clansService: ClanService, private formBuilder: FormBuilder) {
    this.chatGroup = new FormGroup({
      message: new FormControl(),
    });
  }

  ngOnInit(): void {
    //Builds the connection
    this.connection = new SignalR.HubConnectionBuilder()
      .withUrl(this.connectionUrl)
      .build();

    //Initializes the variables
    this.Messages = new Array<ChatMessage>();
    this.OnlineUsers = new Array<string>();

    //Sets up callbacks for when messages are received
    this.connection.on('ReceiveMessage', this.receiveMessage.bind(this));
    this.connection.on('Init', () => {
      var user = this.usersService.CurrentUser;
      this.connection.invoke("JoinChat", this.clansService.currentClan.clanId, user.userName);
    });

    //starts the connection
    this.connection.start();
  }

  //Stops teh connection when this component is destroyed
  ngOnDestroy(): void {
    this.connection.stop();
  }

  //Scrolls all teh way down after receiving a new messages
  ngAfterViewChecked() {         
    var container = document.getElementById("chatLog");           
    container.scrollTop = container.scrollHeight;
  } 

  //Adds a user to the list of connected users
  public addConnection(username) {
    this.OnlineUsers.push(username);
  }

  //removes a user from the list of connected users
  public removeConnection(username) {
    var index = this.OnlineUsers.findIndex(x => x == username);
    if (index != -1) {
      this.OnlineUsers.splice(index,1);
    }
  }

  //Realtime callback. adds a message to the list
  public receiveMessage(message, sender) {
    var msg = new ChatMessage(sender, message);
    this.Messages = [...this.Messages, msg];
  }

  //Sends a message
  public sendMessage() {
    var message = this.chatGroup.get('message').value;
    if (message == null || message.length == 0) {
      return;
    }
    //invokes this method on the backend hub and passes in the messages as the parameter
    this.connection.invoke('SendMessage', message);
    this.chatGroup.reset();
  }
}
