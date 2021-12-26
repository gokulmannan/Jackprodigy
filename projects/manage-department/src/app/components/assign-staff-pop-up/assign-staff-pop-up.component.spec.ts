import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStaffPopUpComponent } from './assign-staff-pop-up.component';

describe('AssignStaffPopUpComponent', () => {
  let component: AssignStaffPopUpComponent;
  let fixture: ComponentFixture<AssignStaffPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignStaffPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStaffPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
