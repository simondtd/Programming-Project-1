using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Game_Buddy_Finder.DataManager;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Game_Buddy_Finder.Controllers
{
    [Route("api/[controller]")]
    public class MessageController : Controller
    {
        private readonly MessageManager _repo;

        public MessageController(MessageManager repo)
        {
            _repo = repo;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Message> Get()
        {
            return _repo.GetAll();
        }

        [HttpGet("from/{fromId}/to{toId}")]
        public IEnumerable<Message> GetMessagesFromUser(int fromId, int toId)
        {
            return _repo.GetMessagesFromUser(fromId, toId);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Message Get(int id)
        {
            return _repo.Get(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] Message value)
        {
            _repo.Add(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Message value)
        {
            _repo.Update(id, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}
