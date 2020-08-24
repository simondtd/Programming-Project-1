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
    [Route("api/[controller]")]
    [ApiController]
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
        public Profile GetProfileOfUser(int userid)
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
        public void Post([FromBody] RegisterModel value)
        {
            Console.WriteLine(value.PasswordHash);
            User user = new User()
            {
                UserName = value.UserName,
                PasswordHash = value.PasswordHash
            };
            
            int uid = _repo.AddUser(user);
            if (uid > 0)
            {
                Profile profile = new Profile()
                {
                    UserId = uid,
                    FirstName = value.FirstName,
                    LastName = value.LastName,
                    Email = value.Email,
                    Region = value.Region,
                };

                _repo.Add(profile);
            }
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
