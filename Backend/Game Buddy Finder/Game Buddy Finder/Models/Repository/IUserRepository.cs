using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Game_Buddy_Finder.Models.Repository
{
    public interface IUserRepository : IDataRepository<User, int>
    {
        User Login(string username, string password);
    }
}
