import { Component, Input } from '@angular/core';
import { Student } from '../../../Models/Student';

@Component({
  selector: 'app-student-row',
  standalone: true,
  imports: [],
  templateUrl: './student-row.component.html',
  styleUrl: './student-row.component.css'
})
export class StudentRowComponent {

  @Input() student!:Student;
}
