import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../Models/Student';
import { FormsModule } from '@angular/forms';
import { StudentDataService } from '../../service/student-data.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { Toast, ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import{ NoopAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'app-add-student',
  standalone: true,
  providers: [MessageService],
  imports: [
    FormsModule,
    HttpClientModule,
    SpinnerModule,
    CommonModule,
    ToastModule,
    MessagesModule,
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  @Input() students!: Student[];
  @Output() public afterStudentAdd = new EventEmitter(); // Specify any or the data type emitted

  student: Student = {
    firstName: '',
    lastName: '',
    phone: '',
    studentGender: '',
    address: '',
  };
  streetAddress: string = '';
  city: string = '';
  state: string = '';
  zipcode: string = '';
  addStudentLoading: boolean = false;
  constructor(
    private studentDataService: StudentDataService,
    private messageService: MessageService
  ) {
    this.studentDataService = studentDataService;
    this.messageService = messageService;
  }

  addStudent(): void {
    this.student.address = `${this.streetAddress}  ${this.city} ${this.zipcode}`;
    this.addStudentLoading = true;
    this.studentDataService.addStudent(this.student).subscribe(
      (response) => {
        console.log(response);
        this.addStudentLoading = false;
        this.showSuccess();
        this.refresh();
        console.log(this.students);
      },
      (err) => {
        console.log('error', err);
        this.addStudentLoading = false;
        let { error } = err;
        let { errors } = error;
        console.log(errors);
        let message = '';

        for (let e in errors) {
          message += 'error : ';
          errors[e].forEach((el: string) => {
            message += el;
          });
          message += '\n';
        }

        this.showError(message);
        this.resetForm();
      },
      () => {
        this.resetForm();
      }
    );
  }
  resetForm() {
    this.student.firstName = '';
    this.student.lastName = '';
    this.student.address = '';
    this.student.studentGender = 'MALE';
    this.student.phone = '';
    this.city = '';
    this.state = '';
    this.streetAddress = '';
    this.zipcode = '';
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Student added ',
      detail: 'Succesfully added student  ',
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Unble to add Student',
      detail: message,
    });
  }

  refresh(){
    this.afterStudentAdd.emit();
  }
}
