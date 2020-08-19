using System;
using System.Collections.Generic;
using System.Linq;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;
namespace Game_Buddy_Finder.DataManager
{
    public class ProfileManager : IDataRepository<Profile, int>
    {
        private readonly GbfContext _context;

        public ProfileManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(Profile item)
        {
            _context.Profiles.Add(item);
            Console.WriteLine("Adding new login attempt");
            _context.SaveChanges();
            return item.ProfileId;
        }

        public int Delete(int id)
        {
            _context.Profiles.Remove(_context.Profiles.Where(x => x.ProfileId == id).FirstOrDefault());
            return id;
        }

        public IEnumerable<Profile> GetProfileOfUser(int id)
        {
            return _context.Profiles.Where(x => x.UserId == id);
        }

        public Profile Get(int id)
        {
            return _context.Profiles.Find(id);
        }

        public IEnumerable<Profile> GetAll()
        {
            return _context.Profiles.ToList();
        }

        public int Update(int id, Profile item)
        {
            throw new NotImplementedException();
        }
    }
}
