import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Message } from '../models/message'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messagesUrl = environment.baseUrl + 'api/message';

  public currentMessage;

  constructor(private httpClient: HttpClient) { }

  public getMessagesToUser(id) {
    return this.httpClient.get(this.messagesUrl + '/to/' + id);
  }

  public validateMessage(message: Message) {
    if (message.Content == null || message.Subject == null) return false;

    return true;
  }

  public getMessagesFromUser(id) {
    return this.httpClient.get(this.messagesUrl + '/from/' + id);
  }

  public sendMessage(message: Message) {
    return this.httpClient.post<Message>(this.messagesUrl, message).subscribe(data => {

    });
  }

  public getMessage(id) {
    return this.httpClient.get(this.messagesUrl + '/' + id);
  }
}
