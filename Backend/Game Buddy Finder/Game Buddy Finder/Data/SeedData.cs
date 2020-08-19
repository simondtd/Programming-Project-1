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
            if (!context.Users.Any())
            {
                context.Users.AddRange(
                    new User
                    {
                        UserName = "Nicolas",
                        PasswordHash = "secure hash"
                    },
                    new User
                    {
                        UserName = "Adama",
                        PasswordHash = "secure hash"
                    },
                    new User
                    {
                        UserName = "Steven",
                        PasswordHash = "secure hash"
                    },
                    new User
                    {
                        UserName = "Andi",
                        PasswordHash = "secure hash"
                    },
                    new User
                    {
                        UserName = "Simon",
                        PasswordHash = "secure hash"
                    });

                context.SaveChanges();
                Console.WriteLine("Seeded Users");
            }

            if (!context.Profiles.Any())
            {
                context.Profiles.AddRange(
                    new Profile() {

                    },
                    new Profile()
                    {

                    },
                    new Profile()
                    {

                    },
                    new Profile()
                    {

                    },
                    new Profile()
                    {

                    });
            }



        }
    }
}
