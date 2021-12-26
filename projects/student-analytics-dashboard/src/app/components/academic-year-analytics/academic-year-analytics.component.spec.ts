import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearAnalyticsComponent } from './academic-year-analytics.component';

describe('AcademicYearAnalyticsComponent', () => {
  let component: AcademicYearAnalyticsComponent;
  let fixture: ComponentFixture<AcademicYearAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicYearAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
