export class Interest {
    InterestId: number;
    UserId: number;
    Title: string;

    public constructor(userId: number, title: string) {
        this.UserId = userId;
        this.Title = title;
    }
}
