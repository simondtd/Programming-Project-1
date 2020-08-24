export class Profile {
    public FirstName;
    public LastName;
    public EmailAddress;
    public Region;

    public constructor(firstName, lastName, email, region) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.EmailAddress = email;
        this.Region = region;
    }
}