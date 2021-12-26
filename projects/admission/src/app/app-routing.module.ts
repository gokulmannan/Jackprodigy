import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllApplicationsComponent } from './_components/all-applications/all-applications.component';
import { ApplicationComponent } from './_components/application/application.component';
import { ChangePasswordComponent } from './_components/change-password/change-password.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { EmailVerificationComponent } from './_components/email-verification/email-verification.component';
import { MyProfileComponent } from './_components/my-profile/my-profile.component';
import { RegisterComponent } from './_components/register/register.component';
import { ThankYouComponent } from './_components/thank-you/thank-you.component';
import { AdminDashboardComponent } from './_components/_admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './_components/_admin/admin-home/admin-home.component';
import { ApplicationsComponent } from './_components/_admin/applications/applications.component';
import { CreateCampusComponent } from './_components/_admin/campus/create-campus/create-campus.component';
import { ViewCampusComponent } from './_components/_admin/campus/view-campus/view-campus.component';
import { CreateCourseComponent } from './_components/_admin/course/create-course/create-course.component';
import { ViewCourseComponent } from './_components/_admin/course/view-course/view-course.component';
import { CreateApplicationComponent } from './_components/_admin/create-application/create-application.component';
import { NewApplicationComponent } from './_components/_admin/new-application/new-application.component';
import { ViewApplicationComponent } from './_components/_admin/view-application/view-application.component';

const routes: Routes = [
  // {
  //   path: '',

    {path:'admission', redirectTo:'/admission',pathMatch:'full'},
  { path: 'admission', component: HomeComponent ,children:[
   //component: HomeComponent, children: [

      { path: 'reset', component: EmailVerificationComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'success', component: ThankYouComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'all-application', component: AllApplicationsComponent },
      { path: 'aa', component: AllApplicationsComponent },
      { path: 'application-form/:userId', component: ApplicationComponent },
      { path: 'myProfile-edit/:userId', component: ApplicationComponent },
      { path: 'profile/:userId', component: MyProfileComponent },
      { path: 'aaa', component: DashboardComponent },
      {
        path: 'admin', component: AdminHomeComponent, children: [
          { path: 'course/view', component: ViewCourseComponent },
          { path: 'course/new-form', component: CreateCourseComponent },
          { path: 'course/edit-form/:id', component: CreateCourseComponent },
          { path: 'new-form', component: NewApplicationComponent },
          { path: 'campus/view', component: ViewCampusComponent },
          { path: 'campus/new-form', component: CreateCampusComponent },
          { path: 'campus/edit-form/:id', component: CreateCampusComponent },

          {
            path: 'application-forms', component: AdminDashboardComponent, children: [
              { path: 'new-form', component: CreateApplicationComponent },
              { path: 'edit-form/:id', component: CreateApplicationComponent }]
          },

          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'application-view/:id', component: ViewApplicationComponent },
          { path: 'application-edit/:id', component: CreateApplicationComponent },
          { path: '', component: AdminDashboardComponent },
          { path: 'applications', component: ApplicationsComponent }]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
