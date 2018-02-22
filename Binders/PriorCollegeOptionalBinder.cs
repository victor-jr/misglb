using Microsoft.AspNetCore.Mvc.ModelBinding;
using Misglb.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Misglb.Binders
{
    public class PriorCollegeOptionalBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            var modelName = bindingContext.BinderModelName;
            var modelNameCheckValue = bindingContext.ValueProvider.GetValue("Has" + modelName);

            if (!bool.Parse(modelNameCheckValue.FirstValue))
            {
                return Task.CompletedTask;
            }

            var name = bindingContext.ValueProvider.GetValue(modelName + ".Name");
            var country = bindingContext.ValueProvider.GetValue(modelName + ".Country");
            var stateAtoll = bindingContext.ValueProvider.GetValue(modelName + ".State_Atoll");
            var address = bindingContext.ValueProvider.GetValue(modelName + ".Address");
            var zip = bindingContext.ValueProvider.GetValue(modelName + ".Zip");

            bindingContext.ModelState.SetModelValue(modelName + ".Name", name);
            bindingContext.ModelState.SetModelValue(modelName + ".Country", country);
            bindingContext.ModelState.SetModelValue(modelName + ".State_Atoll", stateAtoll);
            bindingContext.ModelState.SetModelValue(modelName + ".Address", country);
            bindingContext.ModelState.SetModelValue(modelName + ".Zip", zip);

            PriorCollege priorCollege = new PriorCollege()
            {
                Name = name.FirstValue,
                Country = country.FirstValue,
                State_Atoll = stateAtoll.FirstValue,
                Address = address.FirstValue,
                Zip = zip.FirstValue
            };
            bindingContext.Result = ModelBindingResult.Success(priorCollege);
            return Task.CompletedTask;
        }
    }
}
