import { NgModule } from '@angular/core';
import { NgSelect2Module } from 'ng-select2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccyearNavComponent } from './navigation/accyear-nav/accyear-nav.component';
import { DepartmentNavComponent } from './navigation/department-nav/department-nav.component';
import { SubjectNavByRegulationComponent } from './navigation/subject-nav-by-regulation/subject-nav-by-regulation.component';
import { RegulationNavComponent } from './navigation/regulation-nav/regulation-nav.component';
import { SubjectNavComponent } from './navigation/subject-nav/subject-nav.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { GroupNavComponent } from './navigation/group-nav/group-nav.component';
import { DeleteConformationPopUpComponent } from './navigation/delete-conformation-pop-up/delete-conformation-pop-up.component';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { ConfirmationPopupService } from './service/confirmation-popup.service';
import { LoadingAlertComponent } from './components/loading-alert/loading-alert.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AccyearNavComponent,
    DepartmentNavComponent,
    SubjectNavByRegulationComponent,
    RegulationNavComponent,
    SubjectNavComponent,
    GroupNavComponent,
    DeleteConformationPopUpComponent,
    ConfirmationPopupComponent,
    LoadingAlertComponent
  ],
  imports: [CommonModule, FormsModule, NgSelectModule,Ng2SearchPipeModule,MaterialModule
 
  ],
  exports: [
    NgSelectModule,
    AccyearNavComponent,
    DepartmentNavComponent,
    SubjectNavByRegulationComponent,
    RegulationNavComponent,
    SubjectNavComponent,
    GroupNavComponent,
    DeleteConformationPopUpComponent,
    LoadingAlertComponent,
    MaterialModule
  ],
  providers: [ConfirmationPopupService],
  bootstrap: []


})
export class CommonNavModule { }