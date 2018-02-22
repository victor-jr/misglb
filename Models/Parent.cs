using Misglb.Validations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Misglb.Models
{
    public abstract class Parent
    {
        [Key]
        public int ID { get; set; }

        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "Name")]
        public string FullName
        {
            get
            {
                return FirstName + " " + LastName;
            }
        }

        public bool Alive { get; set; }

        public int? Age { get; set; }

        public string Employer { get; set; }

        [Column(TypeName = "decimal")]
        public decimal? AnnualIncome { get; set; }

        public ICollection<Application> Application { get; set; }
    }
}
