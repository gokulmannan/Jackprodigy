import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicAdminSharedModule } from 'projects/academicadmin/src/app/app.module';
import { AdmissionSharedModule } from 'projects/admission/src/app/app.module';
import { HomeComponent } from 'projects/admission/src/app/home/home.component';
import { AnnouncementSharedModule } from 'projects/announcement/src/app/app.module';
import { ViewSmsComponent } from 'projects/announcement/src/app/_components/announcement/view-sms/view-sms.component';
import { AssignmentSharedModule } from 'projects/assignment/src/app/app.module';
import { CommentSharedModule } from 'projects/comment/src/app/app.module';
import { CourseMaterialSharedModule } from 'projects/courseMaterial/src/app/app.module';
import { FeedBackUISharedModule } from 'projects/feed-back-ui/src/app/app.module';
import { FeedbackFormComponent } from 'projects/feed-back-ui/src/app/_components/feedback/feedback-form/feedback-form.component';
import { ManageDepartmentSharedModule } from 'projects/manage-department/src/app/app.module';
import { ManageMentorSharedModule } from 'projects/manage-mentor/src/app/app.module';
import { AcademicSharedModule } from 'projects/manageacademic/src/app/app.module';
import { NaacSharedModule } from 'projects/naac/src/app/app.module';
import { StudentAnalyticsDashboardSharedModule } from 'projects/student-analytics-dashboard/src/app/app.module';


const routes: Routes = [{

 //   path: '', redirectTo: 'view-sms/:id', pathMatch: 'full'
//},

  //{
  path: 'naac',
  loadChildren: ()=>import('../../projects/naac/src/app/app.module').then(m=>m.NaacSharedModule)
},
{
  path: 'assignment',
  loadChildren: ()=>import('../../projects/assignment/src/app/app.module').then(m=>m.AssignmentSharedModule)
},
{
  path: 'coursematerial',
  loadChildren: ()=>import('../../projects/courseMaterial/src/app/app.module').then(m=>m.CourseMaterialSharedModule)

},
{
  path: 'manageDepartment',
  loadChildren: ()=>import('../../projects/manage-department/src/app/app.module').then(m=>m.ManageDepartmentSharedModule)
},
{
  path: 'announcement',
  loadChildren: ()=>import('../../projects/announcement/src/app/app.module').then(m=>m.AnnouncementSharedModule)
},
{
  path: 'academic',
  loadChildren: ()=>import('../../projects/manageacademic/src/app/app.module').then(m=>m.AcademicSharedModule)

},
{
  path: 'manageMentor',
  loadChildren: ()=>import('../../projects/manage-mentor/src/app/app.module').then(m=>m.ManageMentorSharedModule)
},
{
  path: 'feedBack',
  loadChildren: ()=>import('../../projects/feed-back-ui/src/app/app.module').then(m=>m.FeedBackUISharedModule)
},
{
  path: 'academicadmin',
  loadChildren: ()=>import('../../projects/academicadmin/src/app/app.module').then(m=>m.AcademicAdminSharedModule)
},
// {
//   path: 'admission',
//   loadChildren: '../../projects/admission/src/app/app.module#AdmissionSharedModule'
// },

{
  path: 'view-sms/:id',
  component:ViewSmsComponent
},
{
path:'feedback-form/:feedbackTemplateId/:referenceId',
component:FeedbackFormComponent
},
{
  path: 'dashboard',
  loadChildren: ()=>import('../../projects/student-analytics-dashboard/src/app/app.module').then(m=>m.StudentAnalyticsDashboardSharedModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    NaacSharedModule.forRoot(),
    AssignmentSharedModule.forRoot(),
    CourseMaterialSharedModule.forRoot(),
    CommentSharedModule.forRoot(),
    ManageDepartmentSharedModule.forRoot(),
    AnnouncementSharedModule.forRoot(),
    AcademicSharedModule.forRoot(),
    ManageMentorSharedModule.forRoot(),
    FeedBackUISharedModule.forRoot(),
    AdmissionSharedModule.forRoot(),
    AcademicAdminSharedModule.forRoot(),
    StudentAnalyticsDashboardSharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
