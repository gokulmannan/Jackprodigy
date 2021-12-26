import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseMaterialComponent } from './student-course-material.component';

describe('StudentCourseMaterialComponent', () => {
  let component: StudentCourseMaterialComponent;
  let fixture: ComponentFixture<StudentCourseMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
