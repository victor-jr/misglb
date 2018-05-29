using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Misglb.Models
{
    public abstract class School
    {
        [Key]
        public int ID { get; set; }

        public string Name { get; set; }

        public string Country { get; set; }

        [Display(Name = "State or Atoll")]
        public string State_Atoll { get; set; }

        public string Address { get; set; }

        public string Zip { get; set; }

        public ICollection<Application> Application { get; set; }
    }
}