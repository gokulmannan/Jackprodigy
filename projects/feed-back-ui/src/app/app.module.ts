import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { FeedbackHomeComponent } from './_components/feedback/feedback-home/feedback-home.component';
import { QuestionsComponent } from './_components/feedback/questions/questions.component';
import { AddquestionpopupComponent } from './_components/feedback/addquestionpopup/addquestionpopup.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { CreateFeedbackTemplateComponent } from './_components/feedback/create-feedback-Template/create-feedbackTemplate.component';
import { ViewFeedbackTemplatePopupComponent } from './_components/feedback/feedbackTemplate/viewFeedbackTemplate-popup/view-feedbackTemplate-popup.component';
import { FeedbackFormComponent } from './_components/feedback/feedback-form/feedback-form.component';
import { FeedbackTemplateComponent } from './_components/feedback/feedbackTemplate/feedbackTemplate.component';
import { FeedbackSucessPageComponent } from './_components/feedback/feedback-form/feedback-sucess-page/feedback-sucess-page.component';
import { FeedbackReportComponent } from './_components/feedback/feedback-report/feedback-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule, NgbRatingConfig, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
//import { MatCheckboxModule, MatDatepickerModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatSliderModule, MatStepperModule, MatToolbarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({  declarations: []
})
  export class FeedBackUISharedModule {
    static forRoot(): ModuleWithProviders<any> {
      return {
        ngModule: AppModule,
        providers: []
      }
    }
  }

@NgModule({
  declarations: [
    AppComponent,
    FeedbackHomeComponent,
    QuestionsComponent,
    AddquestionpopupComponent,
    AddFeedbackComponent,
    CreateFeedbackTemplateComponent,
    ViewFeedbackTemplatePopupComponent,
    FeedbackFormComponent,
    FeedbackTemplateComponent,
    FeedbackSucessPageComponent,
    FeedbackReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbTooltipModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    MatPseudoCheckboxModule,
 //   MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
 //  MatInputModule,
    MatRippleModule,
    // Ng2TelInputModule,
    //  MatIconModule,
    // MatStepperModule,
    MatSelectModule,
  //  MatDatepickerModule,
    MatNativeDateModule,
  //  MatSidenavModule,
  //  MatToolbarModule,
  //  MatListModule,
    MatTableModule,
   MatCheckboxModule,
    ChartsModule

  ],
 
  exports: [
    MatButtonModule,
    MatFormFieldModule,
   // MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
