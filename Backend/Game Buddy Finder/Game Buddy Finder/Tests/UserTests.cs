using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moq;
using Xunit;
using Game_Buddy_Finder.Models;
using Game_Buddy_Finder.Controllers;
using Game_Buddy_Finder.DataManager;
using Game_Buddy_Finder.Models.Repository;

namespace Game_Buddy_Finder.Tests
{
    public class UserTests
    {
        [Fact]
        public void User_Test_01()
        {
            Console.WriteLine("HEY");
            var mockRepo = new Mock<ITestRepository>();
            mockRepo.Setup(repo => repo.GetAll())
                .Returns(new List<User>());

            var controller = new TestController(mockRepo.Object);
            Assert.Equal(controller.Get().Count(), 0);
        }
    }
}
