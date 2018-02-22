using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Misglb.Models
{
    public class EmergencyContact : Contact
    {        

        [Required]
        public string LastName { get; set; }

        [Required]
        public string FirstName { get; set; }
    }
}
