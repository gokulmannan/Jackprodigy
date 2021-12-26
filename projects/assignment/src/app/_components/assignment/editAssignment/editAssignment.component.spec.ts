import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssignmentComponent } from './editAssignment.component';

describe('EditassignmentComponent', () => {
  let component: EditAssignmentComponent;
  let fixture: ComponentFixture<EditAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
