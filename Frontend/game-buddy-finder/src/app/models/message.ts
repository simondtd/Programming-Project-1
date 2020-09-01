export class Message {
    messageId: number;
    SendTime;
    SenderId: number;
    ReceiverId: number;
    subject: string;
    content: string;

    public constructor(senderId: number, receiverId: number, subject: string, content: string) {
        this.SenderId = senderId;
    }
}