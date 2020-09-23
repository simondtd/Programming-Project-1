using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Game_Buddy_Finder.Data;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.DataManager
{
    public class PostManager : IDataRepository<Post, int>
    {
        private readonly GbfContext _context;

        public PostManager(GbfContext context)
        {
            _context = context;
        }

        public int Add(Post item)
        {
            _context.Posts.Add(item);
            _context.SaveChanges();
            return 1;
        }

        public int Delete(int id)
        {
            _context.Remove(_context.Users.Find(id));
            return 1;
        }

        public Post Get(int id)
        {
            var post = _context.Posts.Find(id);
            post.Poster = _context.Users.Find(post.PosterUserId);
            return post;
        }


        public IEnumerable<Post> GetAll()
        {
            var posts = _context.Posts.ToList();

            foreach(var post in posts) {
                post.Poster = _context.Users.Find(post.PosterUserId);
            }

            return posts;
        }

        public int Update(int id, Post item)
        {
            _context.Update(item);
            _context.SaveChanges();

            return id;
        }
    }
}
