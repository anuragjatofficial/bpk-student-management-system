using Microsoft.EntityFrameworkCore;
using student_management_system.Data;
using student_management_system.Exceptions;
using student_management_system.Services;

var builder = WebApplication.CreateBuilder(args);
DotNetEnv.Env.Load();
var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables()
    .Build();

var server = configuration["DB_SERVER"];
var port = configuration["DB_PORT"];
var database = configuration["DB_NAME"];
var user = configuration["DB_USER"];
var password = configuration["DB_PASSWORD"];

// var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var connectionString = $"server={server};port={port};database={database};User={user};Password={password};";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddDbContext<StudentDbContext>(options=>options.UseMySql(connectionString,ServerVersion.AutoDetect(connectionString)));
builder.Services.AddExceptionHandler<AppExceptionHandler>();
builder.Services.AddCors(options=>
{
    options.AddPolicy("AllowOrigin", builder =>
    {
        builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("AllowOrigin");

app.UseExceptionHandler(_ => { });

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
