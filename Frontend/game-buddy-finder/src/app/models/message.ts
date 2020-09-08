export class Message {
    messageId: number;
    SendTime;
    SenderId: number;
    ReceiverId: number;
    Subject: string;
    Content: string;

    public constructor(senderId: number, receiverId: number, subject: string, content: string) {
        this.SenderId = senderId;
        this.ReceiverId = receiverId;
        this.Subject = subject;
        this.Content = content;
    }
}
