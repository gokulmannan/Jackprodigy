import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyApplicationPopupComponent } from './apply-application-popup.component';

describe('ApplyApplicationPopupComponent', () => {
  let component: ApplyApplicationPopupComponent;
  let fixture: ComponentFixture<ApplyApplicationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyApplicationPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyApplicationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
