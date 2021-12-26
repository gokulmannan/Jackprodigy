import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDepartmentAnalyticsComponent } from './components/all-department-analytics/all-department-analytics.component';
import { AllFacultyAnalyticsComponent } from './components/all-faculty-analytics/all-faculty-analytics.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardParentComponent } from './components/dashboard-parent/dashboard-parent.component';
import { FacultyAnalyticsComponent } from './components/faculty-analytics/faculty-analytics.component';
import { DepartmentAnalyticsComponent } from './components/department-analytics/department-analytics.component'
import { AcademicYearAnalyticsComponent } from './components/academic-year-analytics/academic-year-analytics.component';
import { AllAcademicAnalyticsComponent } from './components/all-academic-analytics/all-academic-analytics.component'
const routes: Routes = [

  {path:'dashboard', redirectTo:'/dashboard/home',pathMatch:'full'},
  
  {
    path: 'dashboard', component: DashboardParentComponent, children: [
        { path: 'home', component: DashboardHomeComponent },
        { path: 'facultyAnalytics', component: FacultyAnalyticsComponent },
        { path: 'allFacultyAnalytics', component: AllFacultyAnalyticsComponent },
        { path: 'departmentAnalytics', component: DepartmentAnalyticsComponent },
        { path: 'allDepartmentAnalytics', component: AllDepartmentAnalyticsComponent },
        { path: 'academicAnalytics', component: AcademicYearAnalyticsComponent },
        { path: 'allAcademicAnalytics', component: AllAcademicAnalyticsComponent },
    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
