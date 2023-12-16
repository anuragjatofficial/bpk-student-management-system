using student_management_system.Data;
using student_management_system.Exceptions;
using student_management_system.Model;

namespace student_management_system.Services
{
    public class StudentService: IStudentService
    {
        private readonly StudentDbContext _studentDbContext;

        public StudentService(StudentDbContext studentDbContext)
        {
            _studentDbContext = studentDbContext;
        }

        public Student AddStudent(Student student)
        {
            if(student.StudentGender!="MALE" && student.StudentGender != "FEMALE")
            {
                throw new InvalidGenderException("please pass the valid value for gender ");
            }

            _studentDbContext.Students.Add(student);
            _studentDbContext.SaveChanges();
            return student;
        }

        public Student DeleteStudent(string id)
        {
            var studentToDelete = _studentDbContext.Students.FirstOrDefault(s => s.StudentId.ToString() == id);
            if (studentToDelete != null)
            {
                _studentDbContext.Students.Remove(studentToDelete);
                _studentDbContext.SaveChanges();
                return studentToDelete;
            }
            else
            {
                throw new StudentNotFoundException($"can't find any student with id {id}");
            }
        }

        public List<Student> GetAllStudents()
        {
            return _studentDbContext.Students.ToList();
        }

        public Student GetStudent(string id)
        {
            
            Student st = _studentDbContext.Students.FirstOrDefault(s => s.StudentId.ToString() == id);

            if(st!=null)
            {
                return st;
            }
            else
            {
                throw new StudentNotFoundException($"Can't find any student with id {id}");
            }

        }

        public Student UpdateStudent(string id, Student student)
        {

            Student st = _studentDbContext.Students.FirstOrDefault(s=>s.StudentId.ToString()==id);

            if (st != null)
            {
                st.FirstName = student.FirstName;
                st.LastName = student.LastName;
                st.Address = student.Address;
                st.StudentGender = student.StudentGender;
                st.Phone = student.Phone;
                _studentDbContext.SaveChanges();
                return st;
            } 
            else
            {
                throw new StudentNotFoundException($"Can't find any student with id {id}");
            }

        }
    }
}
