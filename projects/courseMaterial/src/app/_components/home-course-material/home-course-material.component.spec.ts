import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCourseMaterialComponent } from './home-course-material.component';

describe('HomeCourseMaterialComponent', () => {
  let component: HomeCourseMaterialComponent;
  let fixture: ComponentFixture<HomeCourseMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCourseMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCourseMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
