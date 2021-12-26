import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCourseMaterialComponent } from './staff-course-material.component';

describe('StaffCourseMaterialComponent', () => {
  let component: StaffCourseMaterialComponent;
  let fixture: ComponentFixture<StaffCourseMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCourseMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCourseMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
