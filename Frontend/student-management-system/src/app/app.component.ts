import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '@coreui/angular';
import { ToastModule } from 'primeng/toast';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentDataService } from './service/student-data.service';
import { Student } from './Models/Student';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AddStudentComponent,
    HttpClientModule,
    SpinnerModule,
    StudentTableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'student-management-system';

  students:Student[] = [];

  constructor(private studentService:StudentDataService){
    this.studentService = studentService;  
  }
  ngOnInit(): void {
    initFlowbite();
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe({
      next: (data:any) => {
        this.students = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  

}
