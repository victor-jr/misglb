using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Misglb.Models
{
    public class EmergencyContact
    {        
        [Key]
        public int ID { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string Relationship { get; set; }

        [Required]
        public string Phone { get; set; }

        public string Email { get; set;}

        public int ApplicationId { get; set; } 
        public Application Application { get; set; }
    }
}
