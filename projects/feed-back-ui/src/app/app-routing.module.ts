import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFeedbackTemplateComponent } from './_components/feedback/create-feedback-Template/create-feedbackTemplate.component';
import { FeedbackFormComponent } from './_components/feedback/feedback-form/feedback-form.component';
import { FeedbackSucessPageComponent } from './_components/feedback/feedback-form/feedback-sucess-page/feedback-sucess-page.component';
import { FeedbackHomeComponent } from './_components/feedback/feedback-home/feedback-home.component';
import { FeedbackReportComponent } from './_components/feedback/feedback-report/feedback-report.component';
import { FeedbackTemplateComponent } from './_components/feedback/feedbackTemplate/feedbackTemplate.component';
import { QuestionsComponent } from './_components/feedback/questions/questions.component';

const routes: Routes = [
 // {
  // path: '', /:feedbackId/:referenceId'
   //component: HomeComponent, children: [
   // {path:'manageDepartment', redirectTo:'/manageDepartment/home',pathMatch:'full'},
      //  path:'feedback-form/:feedbackTemplateId/:referenceId',
      //  component:FeedbackFormComponent
      // },
  
      {
       path:'feedbackSucess',
       component:FeedbackSucessPageComponent
      },
      {
      path:'feedbackReport/:referenceId',
      component:FeedbackReportComponent
     },
     {path:'feedBack', redirectTo:'/feedBack/questions',pathMatch:'full'},
      {
        path:'feedBack',
        component:FeedbackHomeComponent,children:[
         {
           path: 'template', redirectTo: 'feedbackTemplate', pathMatch: 'full' 
         },
        {
         path:'questions',
         component:QuestionsComponent
 
       },
       {
         path:'feedbackTemplate',
         component:FeedbackTemplateComponent
       },
      
    
       {
         path:'create',
         component:CreateFeedbackTemplateComponent
       },
      
        ]
      
   
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
