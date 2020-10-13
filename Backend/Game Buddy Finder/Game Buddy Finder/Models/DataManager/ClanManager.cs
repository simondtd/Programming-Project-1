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

        //Adds a new clan to the database
        public int Add(Clan item)
        {
            var clans = GetAll().ToList();

            //Checks if a clan with the same name already exists
            if (!clans.Exists(x => x.ClanName == item.ClanName))
            {
                var clan = _context.Clans.Add(item);
                _context.SaveChanges();

                AddUserToClan(clan.Entity.OwnerUserId, clan.Entity.ClanId);
            }

            return item.ClanId;
        }

        public int Delete(int id)
        {
            //Deletes the clan with the specified ID, then deletes memberships for that clan
            _context.ClanMemberships.RemoveRange(_context.ClanMemberships.Where(x => x.ClanId == id));
            _context.Clans.Remove(_context.Clans.Where(x => x.ClanId == id).FirstOrDefault());
            
            _context.SaveChanges();
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
            //Removes the user from the clan specified
            _context.ClanMemberships.Remove(_context.ClanMemberships.Where(x => x.UserId == userId && x.ClanId == clanId).FirstOrDefault());
        }

        public Clan Get(int id)
        {
            //Gets teh clan with the specified ID. then adds the user to the object to be returned
            Clan clan = _context.Clans.Find(id);
            clan.Owner = _context.Users.Where(x => x.UserId == clan.OwnerUserId).FirstOrDefault().UserName;
            return clan;
        }

        // Gets the clans of the user specified
        public IEnumerable<Clan> GetClansOfUser(int userId)
        {
            List<ClanMembership> memberships = _context.ClanMemberships.Where(x => x.UserId == userId).ToList();
            List<Clan> clans = new List<Clan>();

            foreach (var membership in memberships)
            {
                clans.Add(_context.Clans.Where(x => x.ClanId == membership.ClanId).FirstOrDefault());
            }

            //Adding the owner to the object to be returned
            foreach (var clan in clans)
            {
                clan.Owner = _context.Users.Where(x => x.UserId == clan.OwnerUserId).FirstOrDefault().UserName;
            }

            return clans;
        }

        // Returns the members of a clan
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

        //Gets all clans in teh database
        public IEnumerable<Clan> GetAll()
        {
            var clans = _context.Clans.ToList();

            //Adds owners to all clan objects to be returned
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
