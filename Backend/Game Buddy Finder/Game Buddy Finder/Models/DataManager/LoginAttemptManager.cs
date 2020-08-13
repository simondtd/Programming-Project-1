using System;
using System.Collections.Generic;
using System.Linq;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.DataManager
{
    public class LoginAttemptManager : IDataRepository<LoginAttempt, int>
    {
        private readonly GbfContext _context;

        public LoginAttemptManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(LoginAttempt item)
        {
            _context.loginAttempts.Add(item);
            return item.LoginAttemptId;
        }

        public int Delete(int id)
        {
            _context.loginAttempts.Remove(_context.loginAttempts.Where(x => x.LoginAttemptId == id).FirstOrDefault());
            return id;
        }

        public LoginAttempt Get(int id)
        {
            return _context.loginAttempts.Find(id);
        }

        public IEnumerable<LoginAttempt> GetAll()
        {
            return _context.loginAttempts.ToList();
        }

        public int Update(int id, LoginAttempt item)
        {
            throw new NotImplementedException();
        }
    }
}
