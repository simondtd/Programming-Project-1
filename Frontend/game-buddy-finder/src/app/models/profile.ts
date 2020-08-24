export class Profile {
    public FirstName: string;
    public LastName: number;
    public UserName: string;
    public PasswordHash: string;
    public EmailAddress: string;
    public Region: string;

    public constructor(firstName, lastName, userName, passwordHash, email, region) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.PasswordHash = passwordHash;
        this.UserName = userName;
        this.EmailAddress = email;
        this.Region = region;
    }
}