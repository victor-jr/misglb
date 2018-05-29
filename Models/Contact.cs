using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Misglb.Models
{
    public abstract class Contact
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        [Display(Name = "State or Atoll")]
        public string State_Atoll { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [StringLength(5, MinimumLength = 5)]
        public string Zip { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public ICollection<Application> Application { get; set; }
    }
}
