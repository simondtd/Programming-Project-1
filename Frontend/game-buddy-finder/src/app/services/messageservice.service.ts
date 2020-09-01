import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Message } from '../models/message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messagesUrl = environment.baseUrl + 'api/message';

  constructor(private httpClient: HttpClient) { }

  public getMessagesToUser(id) {
    return this.httpClient.get(this.messagesUrl + 'to/' + id);
  }

  public sendMessage(message: Message) {
    return this.httpClient.put<Message>(this.messagesUrl, message).subscribe(data => {

    });
  }

  public getMessage(id) {
    return this.httpClient.get(this.messagesUrl + '/' + id);
  }
}
