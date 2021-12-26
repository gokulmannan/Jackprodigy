import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMentorLogComponent } from './delete-mentor-log.component';

describe('DeleteMentorLogComponent', () => {
  let component: DeleteMentorLogComponent;
  let fixture: ComponentFixture<DeleteMentorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMentorLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMentorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
