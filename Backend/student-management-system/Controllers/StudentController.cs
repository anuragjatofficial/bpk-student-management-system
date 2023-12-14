using Microsoft.AspNetCore.Mvc;
using student_management_system.Model;

namespace student_management_system.Controllers;


[ApiController]
[Route("[controller]")]
public class StudentController : ControllerBase {

    [HttpGet] 
    public ActionResult<List<Student>> GetAllStudents(){
        return NoContent();
    }

    [HttpGet("{id}")]
    public ActionResult<List<Student>> GetStudentById(string id){
        return NoContent();
    }

    [HttpPut("{id}")]
    public ActionResult<Student> UpdateStudent(string id){
        return NoContent();
    }


    [HttpPost]
    public ActionResult<Student> AddStudent([FromBody] Student student){
        return NoContent();
    }

    [HttpDelete("{id}")]
    public ActionResult<Student> DeleteStudent(string id){
        return NoContent();
    }
}