using Microsoft.AspNetCore.Mvc.ModelBinding;
using Misglb.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Misglb.Binders
{
    public class ParentOptionalBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            var modelName = bindingContext.BinderModelName;
            var modelNameCheckValue = bindingContext.ValueProvider.GetValue("Has" + modelName);

            if (!bool.Parse(modelNameCheckValue.FirstValue))
            {
                return Task.CompletedTask;
            }

            var firstName = bindingContext.ValueProvider.GetValue(modelName + ".FirstName");
            var lastName = bindingContext.ValueProvider.GetValue(modelName + ".LastName");
            var alive = bindingContext.ValueProvider.GetValue(modelName + ".Alive");
            var age = bindingContext.ValueProvider.GetValue(modelName + ".Age");
            var employer = bindingContext.ValueProvider.GetValue(modelName + ".Employer");
            var annualIncome = bindingContext.ValueProvider.GetValue(modelName + ".AnnualIncome");

            bindingContext.ModelState.SetModelValue(modelName + ".FirstName", firstName);
            bindingContext.ModelState.SetModelValue(modelName + ".LastName", lastName);
            bindingContext.ModelState.SetModelValue(modelName + ".Alive", alive);
            bindingContext.ModelState.SetModelValue(modelName + ".Age", age);
            bindingContext.ModelState.SetModelValue(modelName + ".Employer", employer);
            bindingContext.ModelState.SetModelValue(modelName + ".AnnualIncome", annualIncome);

            switch (modelName)
            {
                case "Father":
                    Father father = new Father()
                    {
                        FirstName = firstName.FirstValue,
                        LastName = lastName.FirstValue,
                        Alive = bool.Parse(alive.FirstValue),
                        Age = int.Parse(age.FirstValue),
                        Employer = employer.FirstValue,
                        AnnualIncome = decimal.Parse(annualIncome.FirstValue)
                    };
                    bindingContext.Result = ModelBindingResult.Success(father);
                    break;
                case "Mother":
                    Mother mother = new Mother()
                    {
                        FirstName = firstName.FirstValue,
                        LastName = lastName.FirstValue,
                        Alive = bool.Parse(alive.FirstValue),
                        Age = int.Parse(age.FirstValue),
                        Employer = employer.FirstValue,
                        AnnualIncome = decimal.Parse(annualIncome.FirstValue)
                    };
                    bindingContext.Result = ModelBindingResult.Success(mother);
                    break;
                case "Guardian":
                    Guardian guardian = new Guardian()
                    {
                        FirstName = firstName.FirstValue,
                        LastName = lastName.FirstValue,
                        Alive = bool.Parse(alive.FirstValue),
                        Age = int.Parse(age.FirstValue),
                        Employer = employer.FirstValue,
                        AnnualIncome = decimal.Parse(annualIncome.FirstValue)
                    };
                    bindingContext.Result = ModelBindingResult.Success(guardian);
                    break;
            }

            return Task.CompletedTask;
        }
    }
}
