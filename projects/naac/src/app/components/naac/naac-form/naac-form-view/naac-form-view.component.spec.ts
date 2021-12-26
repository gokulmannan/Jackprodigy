import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacFormViewComponent } from './naac-form-view.component';

describe('NaacFormViewComponent', () => {
  let component: NaacFormViewComponent;
  let fixture: ComponentFixture<NaacFormViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaacFormViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaacFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
