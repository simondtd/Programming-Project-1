export class Clan {
    public ClanId: number;
    public OwnerUserId: number;
    public ClanName: string;
    public ClanDescription: string;
  constructor(ownerUserId: number, clanName: string, clanDescription: string) {
        this.OwnerUserId = ownerUserId;
        this.ClanName = clanName;
        this.ClanDescription = clanDescription;
    }
}
