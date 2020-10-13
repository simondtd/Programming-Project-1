import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Message } from '../models/message'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  //The backend message API Url
  private messagesUrl = environment.baseUrl + 'api/message';

  //The current messages view in MessagePreview Page
  public currentMessage;

  //The user to reply to when clicking "reply"
  public ReplyUser: string;

  constructor(private httpClient: HttpClient) { }

  //Gets all messages to the user
  public getMessagesToUser(id) {
    return this.httpClient.get(this.messagesUrl + '/to/' + id);
  }

  //Gets all messages from the backend
  public getMessages() {
    return this.httpClient.get<Message[]>(this.messagesUrl);
  }

  //Validates am essages based on its variables
  public validateMessage(message: Message) {
    if (message.content == null || message.subject == null) return false;

    return true;
  }

  //Deletes a message by using its id
  public deleteMessage(id) {
    return this.httpClient.delete(this.messagesUrl + '/' + id);
  }

  //Get all messages from user with the specified id
  public getMessagesFromUser(id) {
    return this.httpClient.get(this.messagesUrl + '/from/' + id);
  }

  //Sends a new message to teh backend, gets added in a database
  public sendMessage(message: Message) {
    return this.httpClient.post<Message>(this.messagesUrl, message);
  }

  //gets a message with the specified id
  public getMessage(id) {
    return this.httpClient.get(this.messagesUrl + '/' + id);
  }
}
