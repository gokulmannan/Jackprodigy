import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacFormComponent } from './naac-form.component';

describe('NaacFormComponent', () => {
  let component: NaacFormComponent;
  let fixture: ComponentFixture<NaacFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaacFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaacFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
