export class Profile {
    public FirstName: string;
    public LastName: string;
    public UserName: string;
    public PasswordHash: string;
    public RePasswordHash: string;
    public EmailAddress: string;
    public Region: string;
    public ProfilePicUrl: string;

    public constructor(firstName, lastName, userName, passwordHash, rePasswordHash, email, region, profilePicUrl) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.PasswordHash = passwordHash;
        this.RePasswordHash = rePasswordHash;
        this.UserName = userName;
        this.EmailAddress = email;
        this.Region = region;
        this.ProfilePicUrl = profilePicUrl;
    }
}