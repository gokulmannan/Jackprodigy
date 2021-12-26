import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicParentComponent } from './academic-parent.component';

describe('AcademicParentComponent', () => {
  let component: AcademicParentComponent;
  let fixture: ComponentFixture<AcademicParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
