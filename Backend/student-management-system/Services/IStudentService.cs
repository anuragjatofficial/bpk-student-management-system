using student_management_system.Model;

namespace student_management_system.Services
{
    public interface IStudentService
    {
        List<Student> GetAllStudents();
        Student AddStudent(Student student);
        Student UpdateStudent(string id, Student student);
        Student DeleteStudent(string id);
        Student GetStudent(string id);
    }
}
