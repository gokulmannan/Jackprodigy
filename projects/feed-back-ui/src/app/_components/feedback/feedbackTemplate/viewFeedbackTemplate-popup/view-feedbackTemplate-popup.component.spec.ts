import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import { ViewFeedbackPopupComponent } from './view-feedback-popup.component';
import { ViewFeedbackTemplatePopupComponent } from './view-feedbackTemplate-popup.component';

describe('ViewFeedbackTemplatePopupComponent', () => {
  let component: ViewFeedbackTemplatePopupComponent;
  let fixture: ComponentFixture<ViewFeedbackTemplatePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFeedbackTemplatePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeedbackTemplatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
