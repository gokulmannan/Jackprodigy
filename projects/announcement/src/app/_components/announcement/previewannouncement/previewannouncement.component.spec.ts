import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewannouncementComponent } from './previewannouncement.component';

describe('PreviewannouncementComponent', () => {
  let component: PreviewannouncementComponent;
  let fixture: ComponentFixture<PreviewannouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewannouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
