using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Game_Buddy_Finder.Models
{
    public class ClanMembership
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClanMembershipId { get; set; }

        [Required]
        public int ClanId { get; set; }

        [Required]
        public int UserId { get; set; }
    }
}
