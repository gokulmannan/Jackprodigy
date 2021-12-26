import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMaterialDetailsViewComponent } from './course-material-details-view.component';

describe('CourseMaterialDetailsViewComponent', () => {
  let component: CourseMaterialDetailsViewComponent;
  let fixture: ComponentFixture<CourseMaterialDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMaterialDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMaterialDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
