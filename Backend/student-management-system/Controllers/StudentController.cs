using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using student_management_system.Model;
using student_management_system.Services;

namespace student_management_system.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService studentService;

        public StudentController(IStudentService studentService)
        {
            this.studentService = studentService;
        }


        [HttpGet]
        public ActionResult<List<Student>> GetAllStudents()
        {
            return Ok(studentService.GetAllStudents());
        }

        [HttpGet("{id}")]
        public ActionResult<List<Student>> GetStudentById(string id)
        {
            return Ok(studentService.GetStudent(id));
        }

        [HttpPut("{id}")]
        public ActionResult<Student> UpdateStudent(string id, [FromBody] Student student)
        {
            
            return Accepted(studentService.UpdateStudent(id, student));
        }


        [HttpPost]
        public ActionResult<Student> AddStudent([FromBody] Student student)
        {
            return Created("/student", studentService.AddStudent(student));
        }

        [HttpDelete("{id}")]
        public ActionResult<Student> DeleteStudent(string id)
        {
            return studentService.DeleteStudent(id);
        }
    }
}
