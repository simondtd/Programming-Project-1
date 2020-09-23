using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Game_Buddy_Finder.Models
{
    public class Post
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PostId { get; set; }

        [Required]
        public int PosterUserId { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime PostTime { get; set; }

        [NotMapped]
        public User Poster { get; set; }
    }
}
