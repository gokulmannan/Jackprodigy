import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentSharedModule } from 'projects/assignment/src/app/app.module';
import { CommentSharedModule } from 'projects/comment/src/app/app.module';
import { CourseMaterialSharedModule } from 'projects/courseMaterial/src/app/app.module';
import { NaacSharedModule } from 'projects/naac/src/app/app.module';

const routes: Routes = [{

    path: '', redirectTo: 'naac/home', pathMatch: 'full' 
  },
  {
  path: 'naac',
  loadChildren: '../../projects/naac/src/app/app.module#NaacSharedModule'
},
{
  path: 'assignment',
  loadChildren: '../../projects/assignment/src/app.module#AssignmentSharedModule'
},
{
  path: 'coursematerial',
  loadChildren: '../../projects/coursematerial/src/app.module#CourseMaterialSharedModule'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    NaacSharedModule.forRoot(),
    AssignmentSharedModule.forRoot(),
    CourseMaterialSharedModule.forRoot(),
    CommentSharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
