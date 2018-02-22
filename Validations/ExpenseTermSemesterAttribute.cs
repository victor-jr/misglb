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
    public class ExpenseTermSemesterAttribute : ValidationAttribute, IClientModelValidator
    {

        private string _expenseTermType;

        public ExpenseTermSemesterAttribute(string type)
        {
            _expenseTermType = type;
        }

        public void AddValidation(ClientModelValidationContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            MergeAttribute(context.Attributes, "data-val", "true");
            MergeAttribute(context.Attributes, "data-val-termsemestertype", GetTermSemesterErrorMessage());
            MergeAttribute(context.Attributes, "data-val-termsemestertype-type", _expenseTermType);
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
            Models.Application application = (Models.Application)validationContext.ObjectInstance;

            if ((application.EducationExpenseTermType == ExpenseType.Per_Academic_Year) && (application.ExpenseTermSemesterSpecific != null))
            {
                return new ValidationResult(GetTermSemesterErrorMessage());
            }

            return ValidationResult.Success;
        }

        private String GetTermSemesterErrorMessage()
        {
            return "Cannot have a Per Academic Year with an Education/Financial Expense Term Semester of Spring or Fall.";
        }
    }
}
