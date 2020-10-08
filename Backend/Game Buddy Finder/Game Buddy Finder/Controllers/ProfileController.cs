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
        public int Post([FromBody] RegisterModel value)
        {
            User user = new User()
            {
                UserName = value.UserName,
                PasswordHash = value.PasswordHash,
                UserType = UserType.Regular,
                CreationTime = DateTime.Now,
            };
            
            int uid = _repo.AddUser(user);
            if (uid > 0)
            {
                Profile profile = new Profile()
                {
                    UserId = uid,
                    FirstName = value.FirstName,
                    LastName = value.LastName,
                    Email = value.EmailAddress,
                    Region = value.Region,
                    PhoneNumber = value.PhoneNumber,
                    ProfilePicUrl = value.ProfilePicUrl
                };

                _repo.Add(profile);
            }

            return uid;
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] RegisterModel value)
        {
            Console.WriteLine(value.FirstName);
            Profile profile = new Profile{
                ProfileId = id,
                FirstName = value.FirstName,
                LastName = value.LastName,
                Email = value.EmailAddress,
                ProfilePicUrl = value.ProfilePicUrl,
                Region = value.Region,
                PhoneNumber = value.PhoneNumber
            };
            _repo.Update(id, profile);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}
