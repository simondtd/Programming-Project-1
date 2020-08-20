using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game_Buddy_Finder.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Game_Buddy_Finder.Models
{
    public class Profile
    {   
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProfileId { get; set; }
        
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public string Email { get; set; }

        public string Region { get; set; }

        public string ProfilePicUrl { get; set; }

    }
}
