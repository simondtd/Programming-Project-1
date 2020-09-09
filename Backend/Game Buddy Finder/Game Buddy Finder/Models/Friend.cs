using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Game_Buddy_Finder.Models
{
    public class Friend
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FriendId { get; set; }

        [Required]
        public DateTime ConnectionTime { get; set; }

        [Required]
        public int UserId1 { get; set; }

        [Required]
        public int UserId2 { get; set; }
    }
}
