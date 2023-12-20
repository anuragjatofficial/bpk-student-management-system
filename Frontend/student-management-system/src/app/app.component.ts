import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '@coreui/angular';
import { ToastModule } from 'primeng/toast';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentDataService } from './service/student-data.service';
import { Student } from './Models/Student';
import { initFlowbite,initDrawers, initModals } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AddStudentComponent,
    HttpClientModule,
    SpinnerModule,
    StudentTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'student-management-system';

  students: Student[] = [];
  isDataLoaded: boolean = false;

  itIndustryFacts = [
    'The first website was created in 1989.',
    'There are over 1.9 billion websites in the world.',
    'The average person spends over 11 hours per week online.',
    'The IT industry is worth over $5 trillion.',
    'There are over 3 million software developers in the United States.',
    'The demand for IT workers is expected to grow by 13% in the next decade.',
    'The average salary for a software developer is over $100,000 per year.',
    'The IT industry is one of the most innovative industries in the world.',
    'IT has revolutionized the way we live and work.',
    'IT is essential for the modern economy.',
    'IT is a great career choice for people who are creative and analytical.',
    'There are many different specializations in IT.',
    'You can learn IT skills through online courses, bootcamps, and college degrees.',
    'IT is a rewarding career that can make a real impact on the world.',
    'IT is a constantly changing field, so you will always be learning new things.',
    'IT is a great way to use your skills to make a difference.',
    'IT is a field with endless possibilities.',
    'IT is the future of work.',
    'IT is essential for solving global challenges.',
    'IT is a powerful force for good in the world.',
  ];

  constructor(
    private studentService: StudentDataService,
    private cdRef: ChangeDetectorRef
  ) {
    this.studentService = studentService;
  }
  ngOnInit(): void {
    this.getStudents();
    initFlowbite();
  }

  getStudents() {
    this.studentService.getStudents().subscribe({
      next: (data: any) => {
        this.students = data;
        this.cdRef.detectChanges();
        initDrawers();
        initModals();
        this.isDataLoaded = true;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }


  getRandomFact(){
    return Math.floor(Math.random() * this.itIndustryFacts.length);
  }
}
