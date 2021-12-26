import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacFormEditComponent } from './naac-form-edit.component';

describe('NaacFormEditComponent', () => {
  let component: NaacFormEditComponent;
  let fixture: ComponentFixture<NaacFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaacFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaacFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
