import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendannouncementComponent } from './sendannouncement.component';

describe('SendannouncementComponent', () => {
  let component: SendannouncementComponent;
  let fixture: ComponentFixture<SendannouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendannouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
