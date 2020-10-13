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

        public IEnumerable<Message> GetMessagesToUser(int toId)
        {
            List<Message> messages = _context.Messages.Where(x => x.ReceiverId == toId).ToList();
            foreach (Message message in messages)
            {
                message.SenderUsername = _context.Users.Where(x => x.UserId == message.SenderId).FirstOrDefault().UserName;
                message.ReceiverUsername = _context.Users.Where(x => x.UserId == message.ReceiverId).FirstOrDefault().UserName;
            }
            return messages;
        }

        public IEnumerable<Message> GetMessagesFromUser(int fromId)
        {
            List<Message> messages = _context.Messages.Where(x => x.SenderId == fromId).ToList();
            foreach (Message message in messages)
            {
                message.SenderUsername = _context.Users.Where(x => x.UserId == message.SenderId).FirstOrDefault().UserName;
                message.ReceiverUsername = _context.Users.Where(x => x.UserId == message.ReceiverId).FirstOrDefault().UserName;
            }
            return messages;
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
            var messages = _context.Messages.ToList();
            foreach (Message message in messages)
            {
                message.SenderUsername = _context.Users.Where(x => x.UserId == message.SenderId).FirstOrDefault().UserName;
                message.ReceiverUsername = _context.Users.Where(x => x.UserId == message.ReceiverId).FirstOrDefault().UserName;
            }
            return messages;
        }

        public int Update(int id, Message item)
        {
            throw new NotImplementedException();
        }
    }
}
