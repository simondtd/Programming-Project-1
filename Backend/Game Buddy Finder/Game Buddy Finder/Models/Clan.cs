using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Game_Buddy_Finder.Models
{
    public class Clan
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClanId { get; set; }

        [Required]
        public int OwnerUserId { get; set; }

        [Required]
        public string ClanName { get; set; }

        [Required]
        public string ClanProfilePicUrl { get; set; }

        [Required]
        public string ClanRegion { get; set; }

        [Required]
        public string ClanDescription { get; set; }

        [NotMapped]
        public User Owner { get; set; }
    }
}
