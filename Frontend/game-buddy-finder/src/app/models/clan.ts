export class Clan {
    public ClanId: number;
    public OwnerUserId: number;
    public ClanName: string;
    public ClanDescription: string;
    public ClanProfilePicUrl: string;
    public ClanRegion: string;
    
    constructor(ownerUserId: number, clanName: string, clanDescription: string, clanProfilePicUrl: string, clanRegion: string) {
        this.OwnerUserId = ownerUserId;
        this.ClanName = clanName;
        this.ClanDescription = clanDescription;
        this.ClanProfilePicUrl = clanProfilePicUrl;
        this.ClanRegion = clanRegion;
    }
}
