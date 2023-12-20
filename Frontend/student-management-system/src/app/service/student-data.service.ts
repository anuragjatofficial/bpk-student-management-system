import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';
import { StudentInput } from '../Models/StudentInput';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  private apiURL = 'https://bpk-student-management-system.onrender.com';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  addStudent(student: StudentInput) {
    return this.http.post(`${this.apiURL}/student`, student);
  }

  getStudents() {
    return this.http.get(`${this.apiURL}/student`);
  }
}
