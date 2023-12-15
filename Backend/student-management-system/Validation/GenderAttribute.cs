using System.ComponentModel.DataAnnotations;

namespace student_management_system.Validation
{
    public class GenderAttribute: ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if(value is string genderString)
            {
                if (string.Equals(genderString, "MALE", StringComparison.OrdinalIgnoreCase) ||
                string.Equals(genderString, "FEMALE", StringComparison.OrdinalIgnoreCase))
                {
                    return ValidationResult.Success;
                }
            }
            return new ValidationResult("Invalid gender. Accepted values are MALE or FEMALE.");
        }
    }
}
