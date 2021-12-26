import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTemplateComponent } from './feedbackTemplate.component';

describe('SurveyComponent', () => {
  let component: FeedbackTemplateComponent;
  let fixture: ComponentFixture<FeedbackTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
