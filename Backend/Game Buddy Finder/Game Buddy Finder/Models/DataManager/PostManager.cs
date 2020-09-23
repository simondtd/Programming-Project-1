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
            item.PostTime = DateTime.Now;
            _context.Posts.Add(item);
            _context.SaveChanges();
            return 1;
        }

        public void AddComment(Comment comment)
        {
            comment.PostTime = DateTime.Now;
            _context.Comments.Add(comment);
            _context.SaveChanges();
        }

        public void RemoveComment(int commentId)
        {
            _context.Comments.Remove(_context.Comments.Where(x => x.CommentId == commentId).FirstOrDefault());
            _context.SaveChanges();
        }

        private IEnumerable<Comment> GetCommentsOfPost(Post post) {
            var comments = _context.Comments.Where(x => x.PostId == post.PostId).OrderByDescending(x => x.PostTime).ToList();

            foreach(var comment in comments) {
                comment.PosterUser = _context.Users.Find(comment.PosterUserId);
                comment.PosterProfile = _context.Profiles.Where(x => x.UserId == comment.PosterUserId).FirstOrDefault();
            }

            return comments;
        }

        public IEnumerable<Post> GetPostsByUser(int userId)
        {
            var posts = _context.Posts.Where(x => x.PosterUserId == userId).ToList();

            foreach (var post in posts)
            {
                post.PosterUser = _context.Users.Find(post.PosterUserId);
                post.PosterProfile = _context.Profiles.Where(x => x.UserId == post.PosterUserId).FirstOrDefault();
                post.Comments = GetCommentsOfPost(post).ToList();
            }

            return posts;
        }

        public IEnumerable<Post> GetPostsForUser(int userId)
        {
            //Getting the users friends
            List<User> users = new List<User>();
            List<Friend> friends = _context.Friends.Where(x => x.UserId1 == userId || x.UserId2 == userId).ToList();

            foreach (Friend friend in friends)
            {
                if (users.Where(x => x.UserId == friend.UserId1).Any() == false)
                {
                    users.Add(_context.Users.Where(x => x.UserId == friend.UserId1).FirstOrDefault());
                }

                if (users.Where(x => x.UserId == friend.UserId2).Any() == false)
                {
                    users.Add(_context.Users.Where(x => x.UserId == friend.UserId2).FirstOrDefault());
                }
            }

            for (int i = users.Count - 1; i >= 0; i--)
            {
                if (users[i].UserId == userId) users.RemoveAt(i);
            }



            List<Post> posts = new List<Post>();

            foreach (var post in GetAll())
            {
                bool isFriend = (users.Where(x => x.UserId == post.PosterUserId).Count() != 0);

                if (isFriend)
                {
                    post.PosterUser = _context.Users.Find(post.PosterUserId);
                    post.PosterProfile = _context.Profiles.Where(x => x.UserId == post.PosterUserId).FirstOrDefault();
                    post.Comments = GetCommentsOfPost(post).ToList();
                    posts.Add(post);
                }

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
            post.PosterUser = _context.Users.Find(post.PosterUserId);
            post.PosterProfile = _context.Profiles.Where(x => x.UserId == post.PosterUserId).FirstOrDefault();
            post.Comments = GetCommentsOfPost(post).ToList();
            return post;
        }


        public IEnumerable<Post> GetAll()
        {
            var posts = _context.Posts.ToList();


            foreach (var post in posts)
            {
                post.PosterUser = _context.Users.Find(post.PosterUserId);
                post.PosterProfile = _context.Profiles.Where(x => x.UserId == post.PosterUserId).FirstOrDefault();
                post.Comments = GetCommentsOfPost(post).ToList();
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
