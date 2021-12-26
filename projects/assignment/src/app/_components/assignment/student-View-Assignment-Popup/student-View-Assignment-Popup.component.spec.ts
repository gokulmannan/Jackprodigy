import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewAssignmentPopupComponent } from './student-View-Assignment-Popup.component';

describe('StudentViewAssignmentPopupComponent', () => {
  let component: StudentViewAssignmentPopupComponent;
  let fixture: ComponentFixture<StudentViewAssignmentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewAssignmentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewAssignmentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
