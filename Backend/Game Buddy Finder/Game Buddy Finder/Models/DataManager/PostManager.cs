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

        public void AddComment(Comment comment)
        {
            _context.Comments.Add(comment);
            _context.SaveChanges();
        }

        public void RemoveComment(int commentId)
        {
            _context.Comments.Remove(_context.Comments.Where(x => x.CommentId == commentId).FirstOrDefault());
            _context.SaveChanges();
        }

        public IEnumerable<Post> GetPostsByUser(int userId)
        {
            var posts = _context.Posts.Where(x => x.PosterUserId == userId).ToList();

            foreach (var post in posts)
            {
                post.Poster = _context.Users.Find(post.PosterUserId);
                post.Comments = _context.Comments.Where(x => x.PostId == post.PostId).OrderByDescending(x => x.PostTime).ToList();
            }

            return posts;
        }

        public int Delete(int id)
        {
            _context.Comments.RemoveRange(_context.Comments.Where(x => x.CommentId == id).ToList());
            _context.Remove(_context.Users.Find(id));

            _context.SaveChanges();
            return 1;
        }

        public Post Get(int id)
        {
            var post = _context.Posts.Find(id);
            post.Poster = _context.Users.Find(post.PosterUserId);
            post.Comments = _context.Comments.Where(x => x.PostId == id).OrderByDescending(x => x.PostTime).ToList();
            return post;
        }


        public IEnumerable<Post> GetAll()
        {
            var posts = _context.Posts.ToList();
            

            foreach (var post in posts)
            {
                post.Poster = _context.Users.Find(post.PosterUserId);
                post.Comments = _context.Comments.Where(x => x.PostId == post.PostId).OrderByDescending(x => x.PostTime).ToList();
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
