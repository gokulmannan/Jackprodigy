import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentCoursematerialComponent } from './_components/parent-coursematerial/parent-coursematerial.component';
import { HomeCourseMaterialComponent } from './_components/home-course-material/home-course-material.component';
import { StaffCourseMaterialComponent } from './_components/staff-course-material/staff-course-material.component';
import { StudentCourseMaterialComponent } from './_components/student-course-material/student-course-material.component';


const routes: Routes = [
  
    {path:'coursematerial', redirectTo:'/coursematerial/home',pathMatch:'full'},
    {
    path: 'coursematerial', component: ParentCoursematerialComponent, children: [
        { path: 'home', component: HomeCourseMaterialComponent },
        { path: 'staffCourseMaterial', component: StaffCourseMaterialComponent },
        { path: 'studentCourseMaterial', component: StudentCourseMaterialComponent }
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
