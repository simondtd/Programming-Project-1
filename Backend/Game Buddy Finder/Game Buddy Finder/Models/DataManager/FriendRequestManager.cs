using System;
using System.Collections.Generic;
using System.Linq;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.DataManager
{
    public class FriendRequestManager : IDataRepository<FriendRequest, int>
    {
        private readonly GbfContext _context;

        public FriendRequestManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(FriendRequest item)
        {
            _context.FriendRequests.Add(item);
            Console.WriteLine("Adding new login attempt");
            _context.SaveChanges();
            return item.FriendRequestId;
        }

        public int Delete(int id)
        {
            _context.FriendRequests.Remove(_context.FriendRequests.Where(x => x.FriendRequestId == id).FirstOrDefault());
            return id;
        }

        public IEnumerable<FriendRequest> GetFriendRequestsOfUser(int id)
        {
            return _context.FriendRequests.Where(x => x.SenderId == id || x.ReceiverId == id);
        }

        public FriendRequest Get(int id)
        {
            return _context.FriendRequests.Find(id);
        }

        public IEnumerable<FriendRequest> GetAll()
        {
            return _context.FriendRequests.ToList();
        }

        public int Update(int id, FriendRequest item)
        {
            throw new NotImplementedException();
        }
    }
}
