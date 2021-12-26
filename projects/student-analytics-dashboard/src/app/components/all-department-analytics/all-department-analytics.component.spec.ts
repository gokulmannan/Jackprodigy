import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepartmentAnalyticsComponent } from './all-department-analytics.component';

describe('AllDepartmentAnalyticsComponent', () => {
  let component: AllDepartmentAnalyticsComponent;
  let fixture: ComponentFixture<AllDepartmentAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDepartmentAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDepartmentAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
