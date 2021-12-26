import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStaffPopUpComponent } from './remove-staff-pop-up.component';

describe('RemoveStaffPopUpComponent', () => {
  let component: RemoveStaffPopUpComponent;
  let fixture: ComponentFixture<RemoveStaffPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveStaffPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStaffPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
