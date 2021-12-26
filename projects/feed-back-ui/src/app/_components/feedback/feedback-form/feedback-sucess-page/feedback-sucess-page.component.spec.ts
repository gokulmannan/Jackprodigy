import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSucessPageComponent } from './feedback-sucess-page.component';

describe('FeedbackSucessPageComponent', () => {
  let component: FeedbackSucessPageComponent;
  let fixture: ComponentFixture<FeedbackSucessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSucessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSucessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
