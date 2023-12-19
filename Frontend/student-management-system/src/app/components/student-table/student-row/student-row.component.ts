import { Component, Input } from '@angular/core';
import { Student } from '../../../Models/Student';
import { StudentDrawerComponent } from '../student-drawer/student-drawer.component';

@Component({
  selector: 'app-student-row',
  standalone: true,
  imports: [StudentDrawerComponent],
  templateUrl: './student-row.component.html',
  styleUrl: './student-row.component.css'
})
export class StudentRowComponent {

  @Input() student!:Student;
}
