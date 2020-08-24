using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Game_Buddy_Finder.DataManager;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Data;

namespace Game_Buddy_Finder.Controllers
{
    public class ProfileController
    {
        private readonly ProfileManager _repo;

        public ProfileController(ProfileManager repo)
        {
            _repo = repo;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Profile> Get()
        {
            return _repo.GetAll();
        }

        [HttpGet("user/{userid}")]
        public Profile GetLoginAttemptsOfUser(int userid)
        {
            return _repo.GetProfileOfUser(userid);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Profile Get(int id)
        {
            return _repo.Get(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] Profile value)
        {
            System.Diagnostics.Debug.WriteLine(value);
            return;
            _repo.Add(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Profile value)
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
