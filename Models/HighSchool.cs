using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Misglb.Models
{
    public class HighSchool : School
    {
        [DataType(DataType.Date)]
        [Display(Name = "High School Start Date")]
        public DateTime HighSchoolStartDate { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "High School End Date")]
        public DateTime HighSchoolEndDate { get; set; }

        [Display(Name = "High School Period")]
        public string HighSchoolPeriod
        {
            get
            {
                return HighSchoolStartDate.Year + "-" + HighSchoolEndDate;
            }
        }

        [DataType(DataType.Date)]
        [Display(Name = "High School Graduation")]
        public DateTime HighSchoolGradDate { get; set; }
    }
}
