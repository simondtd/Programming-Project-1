using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.DataManager
{
    public class UserManager : IDataRepository<User, int>
    {
        private readonly GbfContext _context;

        public UserManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(User item)
        {
            _context.Users.Add(item);
            _context.SaveChanges();
            return 1;
        }

        public int Delete(int id)
        {
            _context.Remove(_context.Users.Find(id));
            return 1;
        }

        public User Login(string username, string password)
        {
            User user = _context.Users.Where(x => x.UserName.ToLower().Equals(username.ToLower())).FirstOrDefault();
            if (user != null)
            {
                bool correctPassword = user.PasswordHash.Equals(password);
                LoginAttempt attempt = new LoginAttempt()
                {
                    AttemptTimeUtc = DateTime.UtcNow,
                    Successful = correctPassword,
                    UserId = user.UserId,
                };

                _context.LoginAttempts.Add(attempt);
                _context.SaveChanges();

                if (!correctPassword) user = null;
            }

            return user;
        }

        public User Get(int id)
        {
            return _context.Users.Find(id);
        }

        public IEnumerable<User> GetUsersByUsername(string username)
        {
            return _context.Users.Where(x => x.UserName.ToUpper().Equals(username.ToUpper()));
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.ToList();
        }

        public int Update(int id, User item)
        {
            _context.Update(item);
            _context.SaveChanges();

            return id;
        }
    }
}
