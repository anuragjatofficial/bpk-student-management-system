import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRowComponent } from './student-row.component';
import { StudentDrawerComponent } from '../student-drawer/student-drawer.component';

describe('StudentRowComponent', () => {
  let component: StudentRowComponent;
  let fixture: ComponentFixture<StudentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentRowComponent,StudentDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
