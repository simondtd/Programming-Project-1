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
    public class LoginAttemptController : Controller
    {
        private readonly LoginAttemptManager _repo;

        public LoginAttemptController(LoginAttemptManager repo)
        {
            _repo = repo;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<LoginAttempt> Get()
        {
            return _repo.GetAll();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public LoginAttempt Get(int id)
        {
            return _repo.Get(id);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]LoginAttempt value)
        {
            _repo.Add(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]LoginAttempt value)
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
