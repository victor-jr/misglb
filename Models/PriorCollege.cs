using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Misglb.Models
{
    public class PriorCollege : School
    {
        [Display(Name = "Degree Obtained at Prior College")]
        public string DegreeObtained { get; set; }
    }
}
