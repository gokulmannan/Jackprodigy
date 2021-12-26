import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicAdminParentComponent } from './academic-admin-parent.component';

describe('AcademicAdminParentComponent', () => {
  let component: AcademicAdminParentComponent;
  let fixture: ComponentFixture<AcademicAdminParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicAdminParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicAdminParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
