export class Message {
    messageId: number;
    sendTime;
    senderId: number;
    receiverId: number;
    subject: string;
    content: string;
    receiverUsername: string = "";

    public constructor(senderId: number, receiverId: number, subject: string, content: string) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.subject = subject;
        this.content = content;
    }
}
