
# Student Management Application

This repository contains a student management application with an ASP.NET Web API backend and an Angular frontend.

## Project Structure

* **backend/studentManagement:** Backend API built with ASP.NET Web API
* **frontend/studentManagement:** Frontend application built with Angular and Tailwind CSS

## Technologies Used

* Backend: `ASP.NET Web API`, `C#`, `Entity Framework Core`, `MySQL`
* Frontend: `Angular`, `TypeScript`, `Tailwind CSS`

## Installation and Setup

**Backend:**

1. Install .NET 6 SDK or later.
2. Clone this repository.
3. Open a terminal and navigate to the `backend/studentManagement` directory.
4. Run the following command to restore NuGet packages:
    ```
    dotnet restore
    ```
5. Run the application:
    ```
    dotnet run
    ```
6. The application will be available at http://localhost:5000/api/students

**Frontend:**

1. Install Node.js 14 or later.
2. Install Angular CLI:
    ```
    npm install -g @angular/cli
    ```
3. Clone this repository.
4. Open a terminal and navigate to the `frontend/studentManagement` directory.
5. Install dependencies:
    ```
    npm install
    ```
6. Start the development server:
    ```
    ng serve
    
7. The application will be available at http://localhost:4200

## API Documentation

The API documentation is available at the following URL:

* **Deployed:** [https://bpk-student-management-system.onrender.com/swagger/index.html](https://bpk-student-management-system.onrender.com/swagger/index.html)
* **Local:** `http://localhost:5000/swagger/index.html` (accessible when the backend is running)

## API Endpoints

**Student:**

| Method | URL | Description |
|---|---|---|
| GET | /api/students | Get all students |
| GET | /api/students/{id} | Get a student by ID |
| POST | /api/students | Add a new student |
| PUT | /api/students/{id} | Update a student |
| DELETE | /api/students/{id} | Delete a student |

## Usage

**Examples:**

* **Get All Students:**
   ```
   GET http://localhost:5000/api/students
* **Get a Student by ID:**
   ```
   GET http://localhost:5000/api/students/{student-id}
   ```
* **Add a New Student:**
   ```
   POST http://localhost:5000/api/students
   ```
   Body:
   ```json
   {
     "firstname": "John",
     "lastname": "Doe",
     "phone": "+1234567890",
     "gender": "MALE",
     "dob": "1990-01-01",
     "address": "123 Main Street"
   }
   ```
* **Update a Student:**
   ```
   PUT http://localhost:5000/api/students/{student-id}
   ```
   Body:
   ```json
   {
     "firstname": "Jane",
     "lastname": "Doe",
     "phone": "+9876543210",
     "gender": "FEMALE",
     "dob": "1995-02-02",
     "address": "456 Elm Street"
   }
   ```
* **Delete a Student:**
   ```
   DELETE http://localhost:5000/api/students/{student-id}
   ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT license. See the LICENSE file for details.
