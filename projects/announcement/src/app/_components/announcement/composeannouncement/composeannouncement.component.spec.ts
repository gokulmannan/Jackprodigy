import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeannouncementComponent } from './composeannouncement.component';

describe('ComposeannouncementComponent', () => {
  let component: ComposeannouncementComponent;
  let fixture: ComponentFixture<ComposeannouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeannouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
