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
    public class FriendController : Controller
    {
        private readonly FriendManager _repo;

        public FriendController(FriendManager repo)
        {
            _repo = repo;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Friend> Get()
        {
            return _repo.GetAll();
        }

        [HttpGet("user/{userid}")]
        public IEnumerable<User> GetFriendsOfUser(int userid)
        {
            return _repo.GetFriendsOfUser(userid);
        }

        [HttpGet("matches/{userid}")]
        public IEnumerable<User> GetMatchesOfUser(int userid)
        {
            return _repo.GetMatchesOfUser(userid);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Friend Get(int id)
        {
            return _repo.Get(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] Friend value)
        {
            _repo.Add(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Friend value)
        {
            _repo.Update(id, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{userId1}/{userId2}")]
        public void Delete(int userId1, int userId2)
        {
            _repo.RemoveFriend(userId1, userId2);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}
