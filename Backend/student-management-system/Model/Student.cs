using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace student_management_system.Model
{
    public class Student
    {
        [Key]
        public Guid StudentId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public String Phone { get; set; } = null!;
        public String Address { get; set; } = null!;

        [Column("Gender")]
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
