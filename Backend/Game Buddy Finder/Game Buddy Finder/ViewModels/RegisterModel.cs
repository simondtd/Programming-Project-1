using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game_Buddy_Finder.Attributes;



namespace Game_Buddy_Finder.Models
{
    public class RegisterModel
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string EmailAddress { get; set; }

        public string UserName { get; set; }

        public string PasswordHash { get; set; }

        public string Region { get; set; }

        public string PhoneNumber { get; set; }

        public string ProfilePicUrl { get; set; }

        public string SecretQuestion { get; set; }

        public string SecretAnswer { get; set; }
    }
}