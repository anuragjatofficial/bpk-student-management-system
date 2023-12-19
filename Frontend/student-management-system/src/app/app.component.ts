import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '@coreui/angular';
import { ToastModule } from 'primeng/toast';
import { StudentTableComponent } from './components/student-table/student-table.component';

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
export class AppComponent {
  title = 'student-management-system';
}
