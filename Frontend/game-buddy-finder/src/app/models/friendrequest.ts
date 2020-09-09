export class FriendRequest {
    FriendRequestId: number;
    SenderId: number;
    ReceiverId: number;

    public constructor(senderId: number, receiverId: number) {
        this.SenderId = senderId;
        this.ReceiverId = receiverId;
    }
}
