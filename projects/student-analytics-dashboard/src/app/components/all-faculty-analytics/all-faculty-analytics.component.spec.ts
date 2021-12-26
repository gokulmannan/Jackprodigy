import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFacultyAnalyticsComponent } from './all-faculty-analytics.component';

describe('AllFacultyAnalyticsComponent', () => {
  let component: AllFacultyAnalyticsComponent;
  let fixture: ComponentFixture<AllFacultyAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFacultyAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFacultyAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
