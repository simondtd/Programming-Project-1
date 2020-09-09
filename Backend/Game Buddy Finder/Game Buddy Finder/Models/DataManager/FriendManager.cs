using System;
using System.Collections.Generic;
using System.Linq;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.DataManager
{
    public class FriendManager : IDataRepository<Friend, int>
    {
        private readonly GbfContext _context;

        public FriendManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(Friend item)
        {
            _context.Friends.Add(item);
            Console.WriteLine("Adding new login attempt");
            _context.SaveChanges();
            return item.FriendId;
        }

        public int Delete(int id)
        {
            _context.Friends.Remove(_context.Friends.Where(x => x.FriendId == id).FirstOrDefault());
            return id;
        }

        public IEnumerable<User> GetFriendsOfUser(int id)
        {
            List<User> users = new List<User>();
            List<Friend> friends = _context.Friends.Where(x => x.UserId1 == id || x.UserId2 == id).ToList();

            foreach (Friend friend in friends)
            {
                if (users.Where(x => x.UserId == friend.UserId1).Any() == false)
                {
                    users.Add(_context.Users.Where(x => x.UserId == friend.UserId1).FirstOrDefault());
                }

                if (users.Where(x => x.UserId == friend.UserId2).Any() == false)
                {
                    users.Add(_context.Users.Where(x => x.UserId == friend.UserId2).FirstOrDefault());
                }
            }


            return users;
        }

        public Friend Get(int id)
        {
            return _context.Friends.Find(id);
        }

        public IEnumerable<Friend> GetAll()
        {
            return _context.Friends.ToList();
        }

        public int Update(int id, Friend item)
        {
            throw new NotImplementedException();
        }
    }
}
