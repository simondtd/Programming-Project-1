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
                        PasswordHash = "123"
                    },
                    new User
                    {
                        UserName = "Adama",
                        PasswordHash = "123"
                    },
                    new User
                    {
                        UserName = "Steven",
                        PasswordHash = "123"
                    },
                    new User
                    {
                        UserName = "Andi",
                        PasswordHash = "123"
                    },
                    new User
                    {
                        UserName = "Simon",
                        PasswordHash = "123"
                    },
                    new User
                    {
                        UserName = "Shaahin",
                        PasswordHash = "123"
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

            if (context.Friends.Any() == false)
            {
                context.Friends.AddRange(
                    new Friend
                    {
                        UserId1 = 5,
                        UserId2 = 1,
                        ConnectionTime = DateTime.UtcNow
                    },
                    new Friend
                    {
                        UserId1 = 5,
                        UserId2 = 2,
                        ConnectionTime = DateTime.UtcNow
                    },
                    new Friend
                    {
                        UserId1 = 5,
                        UserId2 = 3,
                        ConnectionTime = DateTime.UtcNow
                    },
                    new Friend
                    {
                        UserId1 = 5,
                        UserId2 = 4,
                        ConnectionTime = DateTime.UtcNow
                    },
                    new Friend
                    {
                        UserId1 = 5,
                        UserId2 = 6,
                        ConnectionTime = DateTime.UtcNow
                    }
                );

                Console.WriteLine("Seeded Friends");
                context.SaveChanges();
            }

            if (context.FriendRequests.Any() == false)
            {
                context.FriendRequests.AddRange(
                    new FriendRequest
                    {
                        SenderId = 5,
                        ReceiverId = 1,
                        RequestTime = DateTime.UtcNow
                    },
                    new FriendRequest
                    {
                        SenderId = 5,
                        ReceiverId = 2,
                        RequestTime = DateTime.UtcNow
                    },
                    new FriendRequest
                    {
                        SenderId = 5,
                        ReceiverId = 3,
                        RequestTime = DateTime.UtcNow
                    },
                    new FriendRequest
                    {
                        SenderId = 5,
                        ReceiverId = 4,
                        RequestTime = DateTime.UtcNow
                    },
                    new FriendRequest
                    {
                        SenderId = 5,
                        ReceiverId = 6,
                        RequestTime = DateTime.UtcNow
                    }

                );

                Console.WriteLine("Seeded Friend Requests");
                context.SaveChanges();
            }

            if (context.Interests.Any() == false)
            {
                for(int i = 1; i <= 6; i++) {
                    context.Interests.AddRange(
                        new Interest
                        {
                            UserId = i,
                            Title = "League of Legends"
                        },
                        new Interest
                        {
                            UserId = i,
                            Title = "World of Warcraft"
                        },
                        new Interest
                        {
                            UserId = i,
                            Title = "Valorant"
                        },
                        new Interest
                        {
                            UserId = i,
                            Title = "Counterstrike: Global Offensive"
                        },
                        new Interest
                        {
                            UserId = i,
                            Title = "Star Citizen"
                        },
                        new Interest
                        {
                            UserId = i,
                            Title = "Elite: Dangerous"
                        }
                );
                }


                Console.WriteLine("Seeded Interests");
                context.SaveChanges();
            }

        }
    }
}
