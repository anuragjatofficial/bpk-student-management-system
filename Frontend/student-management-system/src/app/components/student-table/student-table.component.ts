import { Component, Input } from '@angular/core';
import { StudentRowComponent } from './student-row/student-row.component';
import { Student } from '../../Models/Student';
import { CommonModule } from '@angular/common';
import { StudentDrawerComponent } from './student-drawer/student-drawer.component';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [StudentRowComponent, CommonModule,StudentDrawerComponent],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css',
})
export class StudentTableComponent {
  @Input() students!: Student[];
}
