import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadConsolidatePopupComponent } from './download-consolidate-popup.component';

describe('DownloadConsolidatePopupComponent', () => {
  let component: DownloadConsolidatePopupComponent;
  let fixture: ComponentFixture<DownloadConsolidatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadConsolidatePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadConsolidatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
