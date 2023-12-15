using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using student_management_system.Model;

namespace student_management_system.Data
{
    public class StudentDbContext : DbContext
    {

        public StudentDbContext() { }
        public StudentDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Student> Students { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
            .Entity<Student>()
            .Property(s => s.StudentId)
            .ValueGeneratedOnAdd();
        }
    }
}
