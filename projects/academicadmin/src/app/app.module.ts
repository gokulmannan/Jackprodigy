import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcademicAdminParentComponent } from './_component/academic-admin-parent/academic-admin-parent.component';
import { AcademicAdminHomeComponent } from './_component/academic-admin-home/academic-admin-home.component';
import { MoveStudentsComponent } from './_component/move-students/move-students.component';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({  declarations: []
})
export class AcademicAdminSharedModule {
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
    AcademicAdminParentComponent,
    AcademicAdminHomeComponent,
    MoveStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    CommonNavModule,
    NgSelectModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
