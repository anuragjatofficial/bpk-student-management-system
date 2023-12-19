import { Component } from '@angular/core';
import { StudentRowComponent } from './student-row/student-row.component';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [StudentRowComponent],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {

}
