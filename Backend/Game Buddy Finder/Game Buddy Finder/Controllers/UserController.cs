using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.DataManager;
using Microsoft.AspNetCore.Mvc;

namespace Game_Buddy_Finder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager _repo;

        public UserController(UserManager repo)
        {
            _repo = repo;
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _repo.GetAll();
        }

        [HttpGet("{username}/{password}")]
        public int Login(string username, string password)
        {
            User user = _repo.Login(username, password);
            return user.UserId;
        }

        // GET: api/Users/5
        [HttpGet("{id}", Name = "Get")]
        public User Get(int id)
        {
            return _repo.Get(id);
        }

        // POST: api/Users
        [HttpPost]
        public void Post([FromBody] User value)
        {
            _repo.Add(value);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User value)
        {
            _repo.Update(value.UserId, value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}
