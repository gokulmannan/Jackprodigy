import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicAdminHomeComponent } from './academic-admin-home.component';

describe('AcademicAdminHomeComponent', () => {
  let component: AcademicAdminHomeComponent;
  let fixture: ComponentFixture<AcademicAdminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicAdminHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
