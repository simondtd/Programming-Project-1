using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            _context.SaveChanges();
            return item.ProfileId;
        }

        public int AddUser(User user)
        {
            if (_context.Users.Where(x => x.UserName.Equals(user.UserName)).Count() == 0)
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return _context.Users.Where(x => x.UserName.Equals(user.UserName)).FirstOrDefault().UserId;
            }

            return 0;
        }

        public int Delete(int id)
        {
            _context.Profiles.Remove(_context.Profiles.Where(x => x.ProfileId == id).FirstOrDefault());
            return id;
        }

        public Profile GetProfileOfUser(int id)
        {
            return _context.Profiles.Where(x => x.UserId == id).FirstOrDefault();
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
            Profile p = Get(id);

            p.Email = item.Email;
            p.FirstName = item.FirstName;
            p.LastName = item.LastName;
            p.PhoneNumber = item.PhoneNumber;
            p.Region = item.Region;
            p.ProfilePicUrl = item.ProfilePicUrl;

            _context.SaveChanges();
            return id;
        }
    }
}
