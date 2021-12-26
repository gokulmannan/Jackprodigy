import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveStudentsComponent } from './move-students.component';

describe('MoveStudentsComponent', () => {
  let component: MoveStudentsComponent;
  let fixture: ComponentFixture<MoveStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
