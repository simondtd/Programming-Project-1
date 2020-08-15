using System;
using Xunit;
using Moq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.DataManager;
using Game_Buddy_Finder.Controllers;
using Game_Buddy_Finder.Models.Repository;
using Game_Buddy_Finder.Data;
using System.Collections.Generic;

namespace Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var mockRepo = new Mock<IUserRepository>();
            mockRepo.Setup(repo => repo.GetAll())
            .Returns(GetTestUsers());

            var controller = new UserController(mockRepo.Object);

            Assert.NotNull(controller.Get(1));

        }

        private IEnumerable<User> GetTestUsers()
        {
            List<User> users = new List<User>();
            users.Add(new User()
            {
                UserId = 1,
                UserName = "Simon",
                PasswordHash = "Secure Hash"
            });
            return users;
        }
    }
}
