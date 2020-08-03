using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using Game_Buddy_Finder.Models;

namespace Game_Buddy_Finder.Data
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var context = new GbfContext(serviceProvider.GetRequiredService<DbContextOptions<GbfContext>>());

            // Look for Users.
            if (context.Users.Any())
                return; // DB has already been seeded.

            context.Users.AddRange(
                new User
                {
                       UserName = "Test"
                });

            context.SaveChanges();
            Console.WriteLine("Seeded DB");
        }
    }
}
