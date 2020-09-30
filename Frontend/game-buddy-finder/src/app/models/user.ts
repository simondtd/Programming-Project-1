export class User {
    public userName: string = "";
    public userType: number = 0;

    public constructor(username: string) {
        this.userName = username;
    }
}