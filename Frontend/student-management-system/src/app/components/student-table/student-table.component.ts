import { Component, Input } from '@angular/core';
import { StudentRowComponent } from './student-row/student-row.component';
import { Student } from '../../Models/Student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [StudentRowComponent, CommonModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css',
})
export class StudentTableComponent {
  @Input() students!: Student[];
}
