using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Game_Buddy_Finder.Models
{
    public class Message
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MessageId { get; set; }

        [Required]
        public DateTime SendTime { get; set; }

        [Required, ForeignKey("Sender")]
        public int SenderId { get; set; }

        [Required, ForeignKey("Receiver")]
        public int ReceiverId { get; set; }

        [Required]
        public string Content { get; set; }

        public virtual User Sender { get; set; }

        public virtual User Receiver { get; set; }
    }
}
