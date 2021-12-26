import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcademicAnalyticsComponent } from './all-academic-analytics.component';

describe('AllAcademicAnalyticsComponent', () => {
  let component: AllAcademicAnalyticsComponent;
  let fixture: ComponentFixture<AllAcademicAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAcademicAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAcademicAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
