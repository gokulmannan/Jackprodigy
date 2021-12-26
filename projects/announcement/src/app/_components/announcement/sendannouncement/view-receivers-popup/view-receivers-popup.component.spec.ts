import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceiversPopupComponent } from './view-receivers-popup.component';

describe('ViewReceiversPopupComponent', () => {
  let component: ViewReceiversPopupComponent;
  let fixture: ComponentFixture<ViewReceiversPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReceiversPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReceiversPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
