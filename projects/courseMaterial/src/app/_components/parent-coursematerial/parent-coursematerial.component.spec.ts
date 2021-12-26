import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCoursematerialComponent } from './parent-coursematerial.component';

describe('ParentCoursematerialComponent', () => {
  let component: ParentCoursematerialComponent;
  let fixture: ComponentFixture<ParentCoursematerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCoursematerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCoursematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
