import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionpopupComponent } from './addquestionpopup.component';

describe('AddquestionpopupComponent', () => {
  let component: AddquestionpopupComponent;
  let fixture: ComponentFixture<AddquestionpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquestionpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
