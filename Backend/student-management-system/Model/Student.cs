namespace student_management_system.Model;

public class Student
{
    public String? StudentId {get;set;}
    public String firstname {get;set;} = null!;

    public String lastname { get; set; } = null!;

    public String phone { get; set; } = null!;

    public Gender gender { get; set; }

}