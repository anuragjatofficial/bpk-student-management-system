using student_management_system.Validation;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace student_management_system.Model
{
    public class Student
    {
        [Key]
        public Guid StudentId { get; set; }

        [Required(ErrorMessage ="firstname can't be blank")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "lastname can't be blank")]
        public string LastName { get; set; }

        [Phone(ErrorMessage = "phone should be in proper format")]
        public String Phone { get; set; }

        [Required(ErrorMessage = "address can't be blank")]
        public String Address { get; set; }

        [Column("Gender")]
        [Required(ErrorMessage = "gender can't be blank")]
        [Gender(ErrorMessage ="Invalid gender please pass the correct value")]
        public String StudentGender { 
            get { return gender.ToString(); }
            set { gender = (Gender)Enum.Parse(typeof(Gender), value, true); } 
        }

        [NotMapped]
        [JsonIgnore]
        public Gender gender { get; set; }
        public override string ToString()
        {
            return $"{{ \" firstname\":{FirstName} }}";
        }
    }
}
