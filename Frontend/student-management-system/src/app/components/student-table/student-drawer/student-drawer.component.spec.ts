import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDrawerComponent } from './student-drawer.component';

describe('StudentDrawerComponent', () => {
  let component: StudentDrawerComponent;
  let fixture: ComponentFixture<StudentDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
