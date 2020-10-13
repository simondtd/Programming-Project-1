using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Game_Buddy_Finder.Attributes;
using System.ComponentModel.DataAnnotations.Schema;

namespace Game_Buddy_Finder.Models
{
    public class User
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required, Username(3, 12)]
        public string UserName { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        public string SecretQuestion { get; set; }

        public string SecretAnswer { get; set; }

        public DateTime CreationTime { get; set; }

        public UserType UserType { get; set; }
    }

    public enum UserType
    {
        Regular = 0,
        Admin = 1,
    }
}
