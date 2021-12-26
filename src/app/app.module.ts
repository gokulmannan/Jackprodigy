import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieModule } from 'ngx-cookie';
import { FormsModule } from '@angular/forms';
import { MainPipe } from './common/pipe/main-pipe.module';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StudentBodyComponent } from './common/navigation/body/student-body/student-body.component';
import { FacultyBodyComponent } from './common/navigation/body/faculty-body/faculty-body.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonNavModule } from './common/common-nav.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ManageAcademicserviceServiceService } from 'projects/SharedProviderAndService/ManageAcademic-ServiceandProvider/manage-academicservice-service.service';
import { ManageAcdemicProviderServiceService } from 'projects/SharedProviderAndService/ManageAcademic-ServiceandProvider/manage-acdemic-provider-service.service';
import { SharedAcdemicModuleModule } from 'projects/SharedProviderAndService/shared-acdemic-module/shared-acdemic-module.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentBodyComponent,
    FacultyBodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    FormsModule,
    MainPipe,
    NgSelectModule,SharedAcdemicModuleModule.forRoot(),
    CommonNavModule,
    Ng2SearchPipeModule,
   ToastrModule.forRoot({
    timeOut: 1000,
    positionClass: 'toast-top-center',
    preventDuplicates: true,
  }),
],
  providers: [ManageAcademicserviceServiceService,ManageAcdemicProviderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
