using System.Collections.Generic;

namespace Game_Buddy_Finder.Models.Repository
{
    /*
    The base repository class, has all CRUD Methods that must be implemented by all controllers
    Most methods in the classes that implement this are very self-explanatory
    */
    public interface IDataRepository<TEntity, TKey> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(TKey id);
        TKey Add(TEntity item);
        TKey Update(TKey id, TEntity item);
        TKey Delete(TKey id);
    }
}
