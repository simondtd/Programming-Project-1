using System;
using System.Collections.Generic;
using System.Linq;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.DataManager
{
    public class MessageManager : IDataRepository<Message, int>
    {
        private readonly GbfContext _context;

        public MessageManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(Message item)
        {
            _context.Messages.Add(item);
            _context.SaveChanges();
            return item.MessageId;
        }

        public int Delete(int id)
        {
            _context.Messages.Remove(_context.Messages.Where(x => x.MessageId == id).FirstOrDefault());
            _context.SaveChanges();
            return id;
        }

        public IEnumerable<Message> GetMessagesFromUser(int fromId, int toId)
        {
            return _context.Messages.Where(x => x.SenderId == fromId && x.ReceiverId == toId);
        }

        public Message Get(int id)
        {
            return _context.Messages.Find(id);
        }

        public IEnumerable<Message> GetAll()
        {
            return _context.Messages.ToList();
        }

        public int Update(int id, Message item)
        {
            throw new NotImplementedException();
        }
    }
}
