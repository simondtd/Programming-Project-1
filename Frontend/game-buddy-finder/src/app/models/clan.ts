export class Clan {
    public ClanId: number;
    public OwnerUserId: number;
    public ClanName: string;
    public ClanDescription: string;
  constructor(ClanId: number, ownerUserId: number, clanName: string, clanDescription: string) {
        this.ClanId = ClanId;
        this.OwnerUserId = ownerUserId;
        this.ClanName = clanName;
        this.ClanDescription = clanDescription;
    }
}
