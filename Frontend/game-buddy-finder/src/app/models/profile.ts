export class Profile {
    public ProfileId: number;
    public FirstName: string;
    public LastName: string;
    public UserName: string;
    public PasswordHash: string;
    public RePasswordHash: string;
    public EmailAddress: string;
    public Region: string;
    public ProfilePicUrl: string;
    public PhoneNumber: string;
    public SecretQuestion: string;
    public SecretAnswer: string;

    public constructor(profileId, firstName, lastName, userName, passwordHash, rePasswordHash, email, region, profilePicUrl, phoneNumber, secretQuestion, secretAnswer) {
        this.ProfileId = profileId;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.PasswordHash = passwordHash;
        this.RePasswordHash = rePasswordHash;
        this.UserName = userName;
        this.EmailAddress = email;
        this.Region = region;
        this.ProfilePicUrl = profilePicUrl;
        this.PhoneNumber = phoneNumber;
        this.SecretQuestion = secretQuestion;
        this.SecretAnswer = secretAnswer;
    }
}
