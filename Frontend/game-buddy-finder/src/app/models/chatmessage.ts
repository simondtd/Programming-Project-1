export class ChatMessage {
    public User: string;
    public Message: string;


    public constructor(user: string, message: string) {
        this.User = user;
        this.Message = message;
    }
}