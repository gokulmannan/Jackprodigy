import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFacultyDeptConsolidatedPopupComponent } from './view-faculty-dept-consolidated-popup.component';

describe('ViewFacultyDeptConsolidatedPopupComponent', () => {
  let component: ViewFacultyDeptConsolidatedPopupComponent;
  let fixture: ComponentFixture<ViewFacultyDeptConsolidatedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFacultyDeptConsolidatedPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFacultyDeptConsolidatedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
