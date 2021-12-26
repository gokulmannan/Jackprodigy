import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyBodyComponent } from './faculty-body.component';

describe('FacultyBodyComponent', () => {
  let component: FacultyBodyComponent;
  let fixture: ComponentFixture<FacultyBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
