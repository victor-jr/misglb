using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Misglb.Models;

namespace Misglb.Validations
{
    public class PriorCollegeIfHasCheck : ValidationAttribute
    {
        private string _hasCheckAttribute;

        public PriorCollegeIfHasCheck(string attribute)
        {
            _hasCheckAttribute = attribute;
        }

        private bool MergeAttribute(IDictionary<string, string> attributes, string key, string value)
        {
            if (attributes.ContainsKey(key))
            {
                return false;
            }

            attributes.Add(key, value);
            return true;
        }
        
        /*
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            Models.Application application = validationContext.ObjectInstance as Models.Application;

            if (_hasCheckAttribute.Equals("HasPriorCollege"))
            {
                return checkValidCheckboxAndValuesPresent(application.PriorCollege, application.HasPriorCollege);
            }

            return new ValidationResult(GetPriorCollegeCheckErrorMessage());
        }
        */

        private ValidationResult checkValidCheckboxAndValuesPresent(School priorCollege, bool hasPriorCollege)
        {
            if (hasPriorCollege &&
                    (
                    priorCollege != null
                    )
                )
            {
                return new ValidationResult(GetPriorCollegeCheckErrorMessage());
            }
            return ValidationResult.Success;
        }

        private String GetPriorCollegeCheckErrorMessage()
        {
            return "Must have the has checkbox checked for the prior college trying to add.";
        }
    }

}
