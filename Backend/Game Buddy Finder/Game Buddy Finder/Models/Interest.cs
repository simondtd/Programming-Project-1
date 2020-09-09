using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Game_Buddy_Finder.Models
{
    public class Interest
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InterestId { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public string Title { get; set; }
    }
}
