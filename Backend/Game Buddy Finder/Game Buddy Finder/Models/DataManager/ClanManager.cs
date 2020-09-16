using System;
using System.Collections.Generic;
using System.Linq;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.DataManager
{
    public class ClanManager : IDataRepository<Clan, int>
    {
        private readonly GbfContext _context;

        public ClanManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(Clan item)
        {
            _context.Clans.Add(item);
            _context.SaveChanges();
            return item.ClanId;
        }

        public int Delete(int id)
        {
            //TODO: Delete all clan memberships of that clan
            _context.Clans.Remove(_context.Clans.Where(x => x.ClanId == id).FirstOrDefault());
            return id;
        }

        public void AddUserToClan(int userId, int clanId)
        {
            ClanMembership membership = new ClanMembership
            {
                UserId = userId,
                ClanId = clanId,
            };
            _context.ClanMemberships.Add(membership);
            _context.SaveChanges();
        }

        public void RemoveUserFromClan(int userId, int clanId)
        {
            _context.ClanMemberships.Remove(_context.ClanMemberships.Where(x => x.UserId == userId && x.ClanId == clanId).FirstOrDefault());
        }

        public Clan Get(int id)
        {
            Clan clan = _context.Clans.Find(id);
            clan.Owner = _context.Users.Where(x => x.UserId == clan.OwnerUserId).FirstOrDefault().UserName;
            return clan;
        }

        public IEnumerable<Clan> GetClansOfUser(int userId)
        {
            List<ClanMembership> memberships = _context.ClanMemberships.Where(x => x.UserId == userId).ToList();

            List<Clan> clans = new List<Clan>();

            foreach (var membership in memberships)
            {
                clans.Add(_context.Clans.Where(x => x.ClanId == membership.ClanId).FirstOrDefault());
            }

            foreach (var clan in clans)
            {
                clan.Owner = _context.Users.Where(x => x.UserId == clan.OwnerUserId).FirstOrDefault().UserName;
            }

            return clans;
        }

        public IEnumerable<User> GetMembersInClan(int clanId)
        {
            List<ClanMembership> memberships = _context.ClanMemberships.Where(x => x.ClanId == clanId).ToList();

            List<User> usersInClan = new List<User>();

            foreach (var membership in memberships)
            {
                usersInClan.Add(_context.Users.Where(x => x.UserId == membership.UserId).FirstOrDefault());
            }

            return usersInClan;
        }

        public IEnumerable<Clan> GetAll()
        {
            var clans = _context.Clans.ToList();

            foreach (var clan in clans)
            {
                clan.Owner = _context.Users.Where(x => x.UserId == clan.OwnerUserId).FirstOrDefault().UserName;
            }

            return clans;
        }

        public int Update(int id, Clan item)
        {
            throw new NotImplementedException();
        }
    }
}
