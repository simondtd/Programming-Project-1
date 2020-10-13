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
    public class ClanController : Controller
    {
        private readonly ClanManager _repo;

        public ClanController(ClanManager repo)
        {
            _repo = repo;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Clan> Get()
        {
            return _repo.GetAll();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Clan Get(int id)
        {
            return _repo.Get(id);
        }

        // GET api/<controller>/5
        [HttpGet("clan/{id}")]
        public IEnumerable<User> GetMembersInClan(int id)
        {
            return _repo.GetMembersInClan(id);
        }

        // GET api/<controller>/5
        [HttpGet("user/{id}")]
        public IEnumerable<Clan> GetClansOfUser(int id)
        {
            return _repo.GetClansOfUser(id);
        }

        // POST api/<controller>
        [HttpGet("add/{userId}/{clanId}")]
        public void AddUserToClan(int userId, int clanId)
        {
            _repo.AddUserToClan(userId, clanId);
        }

        // POST api/<controller>
        [HttpGet("remove/{userId}/{clanId}")]
        public void RemoveUserFromClan(int userId, int clanId)
        {
            _repo.RemoveUserFromClan(userId, clanId);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] Clan value)
        {
            var clans = Get().ToList();
            if (!clans.Exists(x => x.ClanName == value.ClanName)) {
                _repo.Add(value);
            }
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Clan value)
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
