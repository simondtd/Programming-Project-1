using System;
using System.Collections.Generic;
using System.Linq;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.DataManager
{
    public class InterestManager : IDataRepository<Interest, int>
    {
        private readonly GbfContext _context;

        public InterestManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(Interest item)
        {
            _context.Interests.Add(item);
            Console.WriteLine("Adding new login attempt");
            _context.SaveChanges();
            return item.InterestId;
        }

        public int Delete(int id)
        {
            _context.Interests.Remove(_context.Interests.Where(x => x.InterestId == id).FirstOrDefault());
            _context.SaveChanges();
            return id;
        }

        public IEnumerable<Interest> GetInterestsOfUser(int id)
        {
            return _context.Interests.Where(x => x.UserId == id);
        }

        public Interest Get(int id)
        {
            return _context.Interests.Find(id);
        }

        public IEnumerable<Interest> GetAll()
        {
            return _context.Interests.ToList();
        }

        public int Update(int id, Interest item)
        {
            throw new NotImplementedException();
        }
    }
}
