import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { DeleteConformationModelComponent } from './_components/_commonComponents/delete-conformation-model/delete-conformation-model.component';
import { RegisterComponent } from './_components/register/register.component';
import { EmailVerificationComponent } from './_components/email-verification/email-verification.component';
import { ThankYouComponent } from './_components/thank-you/thank-you.component';
import { ChangePasswordComponent } from './_components/change-password/change-password.component';
import { ApplicationComponent } from './_components/application/application.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { MyProfileComponent } from './_components/my-profile/my-profile.component';
import { AllApplicationsComponent } from './_components/all-applications/all-applications.component';
import { AdminDashboardComponent } from './_components/_admin/admin-dashboard/admin-dashboard.component';
import { CreateApplicationComponent } from './_components/_admin/create-application/create-application.component';
import { AdminHomeComponent } from './_components/_admin/admin-home/admin-home.component';
import { ViewApplicationComponent } from './_components/_admin/view-application/view-application.component';
import { ApplicationsComponent } from './_components/_admin/applications/applications.component';
import { CreateCourseComponent } from './_components/_admin/course/create-course/create-course.component';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ViewCourseComponent } from './_components/_admin/course/view-course/view-course.component';
import { NewApplicationComponent } from './_components/_admin/new-application/new-application.component';
import { ApplyApplicationPopupComponent } from './_components/_admin/applications/apply-application-popup/apply-application-popup.component';
import { CreateCampusComponent } from './_components/_admin/campus/create-campus/create-campus.component';
import { ViewCampusComponent } from './_components/_admin/campus/view-campus/view-campus.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
@NgModule({  declarations: []
})
export class AdmissionSharedModule {
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
    DeleteConformationModelComponent,
    RegisterComponent,
    EmailVerificationComponent,
    ThankYouComponent,
    ChangePasswordComponent,
    ApplicationComponent,
    DashboardComponent,
    MyProfileComponent,
    AllApplicationsComponent,
    AdminDashboardComponent,
    CreateApplicationComponent,
    AdminHomeComponent,
    ViewApplicationComponent,
    ApplicationsComponent,
    CreateCourseComponent,
    ViewCourseComponent,
      NewApplicationComponent,
       ApplyApplicationPopupComponent,
        CreateCampusComponent, ViewCampusComponent,
        HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    CommonNavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
  //  MatAutocompleteModule,
    MatSelectModule,
    // MatDatepickerModule,
    MatCheckboxModule,
    MatTableModule,
    // MatDatepickerModule,
    MatNativeDateModule,
    // MatSidenavModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
