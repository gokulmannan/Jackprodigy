import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './_components/assignment/assignment.component';
import { ComposeAssignmentComponent } from './_components/assignment/composeAssignment/composeAssignment.component';
import { AssignmentParentComponent } from './_components/assignment/assignment-parent/assignment-parent.component';
import { StudentViewComponent } from './_components/assignment/studentView/studentView.component';
import { StudentSubmissionComponent } from './_components/assignment/studentSubmission/studentSubmission.component';

const routes: Routes = [
 {path:'assignment', redirectTo:'/assignment/home',pathMatch:'full'},
  { path: 'assignment', component: AssignmentParentComponent ,children:[
    { path: 'home', component: AssignmentComponent },
    { path: 'compose', component: ComposeAssignmentComponent },
   { path: 'studentView', component: StudentViewComponent },
   { path: 'viewSubmission/:id', component: StudentSubmissionComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
