import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Student } from '../../../Models/Student';
import { StudentDrawerComponent } from '../student-drawer/student-drawer.component';
import { FormsModule } from '@angular/forms';
import { StudentInput } from '../../../Models/StudentInput';
import { StudentDataService } from '../../../service/student-data.service';
import { MessageService } from 'primeng/api';
import { Toast,ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-student-row',
  standalone: true,
  providers: [MessageService],
  imports: [StudentDrawerComponent, FormsModule, ToastModule,MessagesModule],
  templateUrl: './student-row.component.html',
  styleUrl: './student-row.component.css',
})
export class StudentRowComponent {
  @Input() student!: Student;
  @Output() afterUpdateStudent = new EventEmitter();

  studentInput: StudentInput = {
    firstName: this.student?.firstName,
    lastName: this.student?.lastName,
    phone: this.student?.phone,
    studentGender: this.student?.studentGender,
    address: this.student?.address,
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['student']) {
      this.studentInput.firstName = this.student.firstName;
      this.studentInput.lastName = this.student.lastName;
      this.studentInput.phone = this.student.phone;
      this.studentInput.studentGender = this.student.studentGender;
      this.studentInput.address = this.student.address;
    }
  }

  constructor(
    private studentDataService: StudentDataService,
    private messageService: MessageService
  ) {
    this.studentDataService = studentDataService;
    this.messageService = messageService;
  }

  updateStudent() {
    console.log('update ');

    const st: Student = {
      studentId: this.student.studentId,
      firstName: this.studentInput.firstName,
      lastName: this.studentInput.lastName,
      phone: this.studentInput.phone,
      studentGender: this.studentInput.studentGender,
      address: this.studentInput.address,
    };
    this.studentDataService.updateStudent(st).subscribe({
      next: (res) => {
        console.log(this.messageService);
        this.showSuccess();
      },
      error: (err) => {},
      complete: () => {},
    });
  }

  deleteStudent(){
    this.studentDataService.deleteStudent(this.student.studentId).subscribe({
      next:(res)=>{
        this.showSuccess();
        this.refresh();
      },
      error:(err)=>{
        this.showError(err.toString());
      },
    })
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Student updated ',
      detail: 'Succesfully updated student  ',
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Unble to add Student',
      detail: message,
    });
  }

  refresh() {
    this.afterUpdateStudent.emit();
  }
}
