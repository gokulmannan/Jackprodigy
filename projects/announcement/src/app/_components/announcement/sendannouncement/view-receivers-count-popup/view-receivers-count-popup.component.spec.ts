import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceiversCountPopupComponent } from './view-receivers-count-popup.component';

describe('ViewReceiversCountPopupComponent', () => {
  let component: ViewReceiversCountPopupComponent;
  let fixture: ComponentFixture<ViewReceiversCountPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReceiversCountPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReceiversCountPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
