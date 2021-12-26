import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSelectMembersPopupComponent } from './student-select-members-popup.component';

describe('StudentSelectMembersPopupComponent', () => {
  let component: StudentSelectMembersPopupComponent;
  let fixture: ComponentFixture<StudentSelectMembersPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSelectMembersPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSelectMembersPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
