import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentCoursematerialComponent } from './_components/parent-coursematerial/parent-coursematerial.component';
import { HomeCourseMaterialComponent } from './_components/home-course-material/home-course-material.component';
import { CreateCourseMaterialComponent } from './_components/createCourseMaterial/createCourseMaterial.component';
import { DeleteMaterialpopComponent } from './_components/delete-materialpop/delete-materialpop.component';
import { StaffCourseMaterialComponent } from './_components/staff-course-material/staff-course-material.component';
import { CourseMaterialDetailsViewComponent } from './_components/course-material-details-view/course-material-details-view.component';
import { FormsModule } from '@angular/forms';
import { StudentCourseMaterialComponent } from './_components/student-course-material/student-course-material.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { MainPipe } from 'src/app/common/pipe/main-pipe.module';



  @NgModule({  declarations: []
})
  export class CourseMaterialSharedModule {
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
        ParentCoursematerialComponent,
        HomeCourseMaterialComponent,
        StaffCourseMaterialComponent,
        CreateCourseMaterialComponent,
        DeleteMaterialpopComponent,
        CourseMaterialDetailsViewComponent,
        StudentCourseMaterialComponent
     ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    CommonNavModule,
    MainPipe
        
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
