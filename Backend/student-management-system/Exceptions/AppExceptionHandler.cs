using Microsoft.AspNetCore.Diagnostics;

namespace student_management_system.Exceptions
{
    public class AppExceptionHandler : IExceptionHandler
    {

        public AppExceptionHandler() { }    
        public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
        {
            (int statusCode, string errorMessage) = exception switch
            {
                StudentNotFoundException => (404, exception.Message),
                InvalidGenderException => (400, exception.Message),
            };

            httpContext.Response.StatusCode = statusCode;
            await httpContext.Response.WriteAsJsonAsync(errorMessage);
            return false;
        }
    }
}
