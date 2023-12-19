import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  private apiURL = 'https://bpk-student-management-system.onrender.com';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  addStudent(student: Student) {
    return this.http.post(`${this.apiURL}/student`, student);
  }
}
