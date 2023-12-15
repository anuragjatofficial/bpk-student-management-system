# Use the official .NET SDK image as a base image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the project files to the container
COPY . .

# Build the application
RUN dotnet publish -c Release -o out

# Use the official .NET Runtime image as the final image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Set the working directory in the container
WORKDIR /app

# Copy the published application from the build image
COPY --from=build /app/out .

# Expose the port the app will run on
EXPOSE 80

# Define the entry point for the application
ENTRYPOINT ["dotnet", "student-management-system.dll"]
