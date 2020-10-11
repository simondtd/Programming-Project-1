using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moq;
using Xunit;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Controllers;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.Tests
{
    public class UserTests
    {
        [Fact]
        public void User_Test_01()
        {
            var mockRepo = new Mock<IDataRepository<User, int>>();
            mockRepo.Setup(repo => repo.GetAll())
                .Returns(new List<User>());

            //var controller = new UserController(mockRepo.Object);
            Assert.Equal(true, true);
        }


    }
}
