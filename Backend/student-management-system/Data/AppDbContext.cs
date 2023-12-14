
using Microsoft.EntityFrameworkCore;
using student_management_system.Model;

namespace student_management_system.Data;

public class AppDbContext:DbContext {
    public AppDbContext(DbContextOptions dbContextOptions):base(dbContextOptions){}

    public DbSet<Student> Students {get;set;}
}