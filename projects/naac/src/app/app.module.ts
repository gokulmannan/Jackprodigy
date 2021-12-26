import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaacTemplateComponent } from './components/naac-template/naac-template/naac-template.component';
import { CreatePopupComponent } from './components/naac-template/create-popup/create-popup.component';
import { HomeComponent } from './components/naac/home/home.component';
import { NaacParentComponent } from './components/naac-parent/naac-parent.component';
import { NaacFormComponent } from './components/naac/naac-form/naac-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubmittedComponent } from './components/naac/submitted/submitted.component';
import { MainPipe } from 'src/app/common/pipe/main-pipe.module';
import { NaacFormEditComponent } from './components/naac/naac-form/naac-form-edit/naac-form-edit.component';
import { EditPopupComponent } from './components/naac-template/edit-popup/edit-popup.component';
import { NaacFormViewComponent } from './components/naac/naac-form/naac-form-view/naac-form-view.component';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { NaacImportPopupComponent } from './components/naac/naac-form/naac-import-popup/naac-import-popup.component';
import { ManualNaacComponent } from './components/manual-naac/manual-naac.component';


import { NaacReportComponent } from './components/naac-report/naac-report/naac-report.component';
import { DownloadConsolidatePopupComponent } from './components/naac-report/download-consolidate-popup/download-consolidate-popup.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewFacDeptFilesComponent } from './components/naac-report/view-fac-dept-files/view-fac-dept-files.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewFacultyDeptConsolidatedPopupComponent } from './components/naac-report/download-consolidate-popup/view-faculty-dept-consolidated-popup/view-faculty-dept-consolidated-popup.component';
import { AddNaacFilePopupComponent } from './components/naac/submitted/add-naac-file-popup/add-naac-file-popup.component';
import { EditNaacFilePopupComponent } from './components/naac/submitted/edit-naac-file-popup/edit-naac-file-popup.component';
import { DeleteNaacPopupComponent } from './components/naac/submitted/delete-naac-popup/delete-naac-popup.component';
import { RouterModule } from '@angular/router';

@NgModule({  declarations: [DeleteNaacPopupComponent]
})
export class NaacSharedModule {
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
    NaacTemplateComponent,
    CreatePopupComponent,
    HomeComponent,
    NaacFormComponent,
    NaacParentComponent,
    SubmittedComponent,
    NaacFormEditComponent,
    NaacReportComponent,
    DownloadConsolidatePopupComponent,
    EditPopupComponent,
    NaacFormViewComponent,
    NaacImportPopupComponent,
    ManualNaacComponent,
    DownloadConsolidatePopupComponent,
    ViewFacDeptFilesComponent,
    ViewFacultyDeptConsolidatedPopupComponent,
    AddNaacFilePopupComponent,
    EditNaacFilePopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MainPipe,
    CommonNavModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),CommonModule,RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    }])
  ],
  providers: [    
  ],
  bootstrap: [AppComponent],
 

})
export class AppModule { }
 