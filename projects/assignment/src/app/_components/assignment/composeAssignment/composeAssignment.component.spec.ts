import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeAssignmentComponent } from './composeAssignment.component';

describe('ComposeComponent', () => {
  let component: ComposeAssignmentComponent;
  let fixture: ComponentFixture<ComposeAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
