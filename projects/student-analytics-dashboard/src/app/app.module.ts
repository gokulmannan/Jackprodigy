import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { FacultyAnalyticsComponent } from './components/faculty-analytics/faculty-analytics.component';
import { DashboardParentComponent } from './components/dashboard-parent/dashboard-parent.component';
import { CommonModule } from '@angular/common';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DepartmentAnalyticsComponent } from './components/department-analytics/department-analytics.component';
import { AcademicYearAnalyticsComponent } from './components/academic-year-analytics/academic-year-analytics.component';
import { AllFacultyAnalyticsComponent } from './components/all-faculty-analytics/all-faculty-analytics.component';
import { AllDepartmentAnalyticsComponent } from './components/all-department-analytics/all-department-analytics.component';
import { AllAcademicAnalyticsComponent } from './components/all-academic-analytics/all-academic-analytics.component';

@NgModule({  declarations: [DepartmentAnalyticsComponent, AcademicYearAnalyticsComponent, AllFacultyAnalyticsComponent, AllDepartmentAnalyticsComponent, AllAcademicAnalyticsComponent]
})
export class StudentAnalyticsDashboardSharedModule {
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
    DashboardParentComponent,
    DashboardHomeComponent,
    FacultyAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CommonNavModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
