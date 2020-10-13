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
            _context.SaveChanges();
            return item.FriendRequestId;
        }

        public int Delete(int id)
        {
            _context.FriendRequests.Remove(_context.FriendRequests.Where(x => x.FriendRequestId == id).FirstOrDefault());
            _context.SaveChanges();
            return id;
        }

        public IEnumerable<FriendRequest> GetFriendRequestsOfUser(int id)
        {
            List<FriendRequest> friendRequests = _context.FriendRequests.Where(x => x.ReceiverId == id).ToList();

            foreach (FriendRequest request in friendRequests)
            {
                request.SenderUsername = _context.Users.Where(x => x.UserId == request.SenderId).FirstOrDefault().UserName;
            }

            return friendRequests;
        }

        public FriendRequest Get(int id)
        {
            return _context.FriendRequests.Find(id);
        }

        public int AcceptFriendRequest(int friendRequestId)
        {
            FriendRequest request = Get(friendRequestId);
            Friend friend = new Friend
            {
                UserId1 = request.SenderId,
                UserId2 = request.ReceiverId,
                ConnectionTime = DateTime.Now,
            };
            _context.Friends.Add(friend);
            Delete(friendRequestId);
            _context.SaveChanges();
            return 1;
        }

        public int RejectFriendRequest(int friendRequestId)
        {
            Delete(friendRequestId);
            return 1;
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
