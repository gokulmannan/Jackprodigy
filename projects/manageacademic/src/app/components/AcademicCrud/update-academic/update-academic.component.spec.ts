import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAcademicComponent } from './update-academic.component';

describe('UpdateAcademicComponent', () => {
  let component: UpdateAcademicComponent;
  let fixture: ComponentFixture<UpdateAcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAcademicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
