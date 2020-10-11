using System.Collections.Generic;

namespace Game_Buddy_Finder.Models.Repository
{
    public interface ITestRepository: IDataRepository<User, int>
    {
        IEnumerable<User> GetAll();
        User Get(int id);
        int Add(User item);
        int Update(int id, User item);
        int Delete(int id);
    }
}
