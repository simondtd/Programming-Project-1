using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Game_Buddy_Finder.Models.Repository
{
    public interface IDataRepository<TEntity, TKey> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(TKey id);
        TKey Add(TEntity item);
        TKey Update(TKey id, TEntity item);
        TKey Delete(TKey id);
        void Add(List<TEntity> items);
    }
}
