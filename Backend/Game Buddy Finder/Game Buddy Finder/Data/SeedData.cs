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
                    },
                    new User
                    {
                        UserName = "Shaahin",
                        PasswordHash = "secure hash"
                    }
                    );

                context.SaveChanges();
                Console.WriteLine("Seeded Users");
            }

            if (!context.Profiles.Any())
            {
                context.Profiles.AddRange(
                    new Profile()
                    {
                        UserId = 1,
                        FirstName = "Nicolas",
                        LastName = "Nicolas",
                        Region = "Oceania",
                        Email = "Nicolas@gmail.com",
                        ProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        PhoneNumber = "12345678"
                    },
                    new Profile()
                    {
                        UserId = 2,
                        FirstName = "Adama",
                        LastName = "Adama",
                        Region = "Oceania",
                        Email = "Adama@gmail.com",
                        ProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        PhoneNumber = "12345678"
                    }
                    , new Profile()
                    {
                        UserId = 3,
                        FirstName = "Steven",
                        LastName = "Steven",
                        Region = "Oceania",
                        Email = "Steven@gmail.com",
                        ProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        PhoneNumber = "12345678"
                    },
                    new Profile()
                    {
                        UserId = 4,
                        FirstName = "Andi",
                        LastName = "Andi",
                        Region = "Oceania",
                        Email = "Andi@gmail.com",
                        ProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        PhoneNumber = "12345678"

                    },
                    new Profile()
                    {
                        UserId = 5,
                        FirstName = "Simon",
                        LastName = "Hesjevik",
                        Region = "Oceania",
                        Email = "Simon@gmail.com",
                        ProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        PhoneNumber = "12345678"
                    },
                    new Profile()
                    {
                        UserId = 6,
                        FirstName = "Shaahin",
                        LastName = "Madani",
                        Region = "Oceania",
                        Email = "Shaahin.Madani@gmail.com",
                        ProfilePicUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                        PhoneNumber = "12345678"
                    }
                );

                context.SaveChanges();
                Console.WriteLine("Seeded Profiles");
            }

            if (context.Messages.Any() == false)
            {
                context.Messages.AddRange(
                    new Message
                    {
                        SendTime = DateTime.UtcNow,
                        SenderId = 5,
                        ReceiverId = 1,
                        Subject = "Subject test, From Simon!",
                        Content = "Hello Nicolas, From Simon :D"
                    },
                    new Message
                    {
                        SendTime = DateTime.UtcNow,
                        SenderId = 1,
                        ReceiverId = 5,
                        Subject = "Subject test, From Nicolas!",
                        Content = "Hello Simon, From Nicolas :D"
                    }
                );
                Console.WriteLine("Seeded Messages");
                context.SaveChanges();
            }

        }
    }
}
