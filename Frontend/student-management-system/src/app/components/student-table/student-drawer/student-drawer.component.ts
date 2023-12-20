import { Component, Input } from '@angular/core';
import { Student } from '../../../Models/Student';

@Component({
  selector: 'app-student-drawer',
  standalone: true,
  imports: [],
  templateUrl: './student-drawer.component.html',
  styleUrl: './student-drawer.component.css',
})
export class StudentDrawerComponent {
  @Input() student!: Student;
}
