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
    public class PostController : ControllerBase
    {
        private readonly PostManager _repo;

        public PostController(PostManager repo)
        {
            _repo = repo;
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return _repo.GetAll();
        }

        [HttpGet("user/{userid}")]
        public IEnumerable<Post> GetPostsByUser(int userid)
        {
            return _repo.GetPostsByUser(userid);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Post Get(int id)
        {
            return _repo.Get(id);
        }

        // POST: api/Users
        [HttpPost]
        public void Post([FromBody] Post value)
        {
            _repo.Add(value);
        }

        // POST: api/Users
        [HttpPost("comment")]
        public void PostComment([FromBody] Comment value)
        {
            _repo.AddComment(value);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Post value)
        {
            _repo.Update(value.PostId, value);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }

                // DELETE: api/ApiWithActions/5
        [HttpDelete("comment")]
        public void DeleteComment(int id)
        {
            _repo.RemoveComment(id);
        }
    }
}
