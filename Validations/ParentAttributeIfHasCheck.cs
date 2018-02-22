using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Misglb.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Misglb.Validations
{
    public class ParentAttributeIfHasCheck : ValidationAttribute
    {
        private string _hasCheckAttribute;

        public ParentAttributeIfHasCheck(string attribute)
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

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            Models.Application application = validationContext.ObjectInstance as Models.Application;

            switch (_hasCheckAttribute)
            {
                case "HasFather":
                    return checkValidCheckboxAndValuesPresent(application.Father, application.HasFather);
                case "HasMother":
                    return checkValidCheckboxAndValuesPresent(application.Mother, application.HasMother);
                case "HasGuardian":
                    return checkValidCheckboxAndValuesPresent(application.Guardian, application.HasGuardian);
            };

            return new ValidationResult(GetParentCheckErrorMessage());
        }

        private String GetParentCheckErrorMessage()
        {
            return "Must have the has checkbox checked for the parent trying to add.";
        }

        private ValidationResult checkValidCheckboxAndValuesPresent(Parent parent, bool hasCheck)
        {
            if (hasCheck &&
                    (
                    parent == null
                    )
                )
            {
                return new ValidationResult(GetParentCheckErrorMessage());
            }
            return ValidationResult.Success;
        }
    }
}
