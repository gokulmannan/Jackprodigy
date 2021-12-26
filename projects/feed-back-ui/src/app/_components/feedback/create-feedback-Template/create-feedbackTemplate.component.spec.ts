import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeedbackTemplateComponent } from './create-feedbackTemplate.component';

describe('CreateFeedBackComponent', () => {
  let component: CreateFeedbackTemplateComponent;
  let fixture: ComponentFixture<CreateFeedbackTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFeedbackTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeedbackTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
