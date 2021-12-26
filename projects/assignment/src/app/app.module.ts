import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbAlertModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentComponent } from './_components/assignment/assignment.component';
import { ComposeAssignmentComponent } from './_components/assignment/composeAssignment/composeAssignment.component';
import { EditAssignmentComponent } from './_components/assignment/editAssignment/editAssignment.component';
import { AssignmentParentComponent } from './_components/assignment/assignment-parent/assignment-parent.component';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { CommonModule, DatePipe } from '@angular/common';
import { StudentViewAssignmentPopupComponent } from './_components/assignment/student-View-Assignment-Popup/student-View-Assignment-Popup.component';
import { StudentUploadPopUpComponent } from './_components/assignment/studentUpload-Pop-up/studentUpload-Pop-up.component';
import { StudentViewComponent } from './_components/assignment/studentView/studentView.component';
import { SubjectPopupComponent } from './_components/assignment/subject-Popup/subject-Popup.component';
import { StudentSubmissionComponent } from './_components/assignment/studentSubmission/studentSubmission.component';


@NgModule({  declarations: []
})
export class AssignmentSharedModule {
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
    AssignmentParentComponent,
    AssignmentComponent,
    ComposeAssignmentComponent,
    EditAssignmentComponent,
    SubjectPopupComponent,
    StudentUploadPopUpComponent,
    StudentViewComponent,
    StudentViewAssignmentPopupComponent,
    StudentSubmissionComponent
      
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
    BrowserAnimationsModule,
    CommonModule,
    CommonNavModule
  ],
  exports :[
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    EditAssignmentComponent,
    SubjectPopupComponent,
    StudentUploadPopUpComponent,
    StudentViewAssignmentPopupComponent
  ],
})
export class AppModule { }
