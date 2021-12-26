import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableStaffPopupComponent } from './disable-staff-popup.component';

describe('DisableStaffPopupComponent', () => {
  let component: DisableStaffPopupComponent;
  let fixture: ComponentFixture<DisableStaffPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableStaffPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableStaffPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
