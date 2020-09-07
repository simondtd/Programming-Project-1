using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Game_Buddy_Finder.Models
{
    public class FriendRequest
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int FriendRequestId { get; set; }

        [Required]
        public DateTime RequestTime { get; set; }

        [Required]
        public int SenderId { get; set; }

        [Required]
        public int ReceiverId { get; set; }
    }
}
