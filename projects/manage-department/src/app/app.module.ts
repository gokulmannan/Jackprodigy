import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentManageDepartmentComponent } from './components/parent-manage-department/parent-manage-department.component';
import { HomeManageDepartmentComponent } from './components/home-manage-department/home-manage-department.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { EditManageDepartmentComponent } from './components/edit-manage-department/edit-manage-department.component';
import { DeleteManageDepartmentComponent } from './components/delete-manage-department/delete-manage-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelect2Module } from 'ng-select2';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewHodComponent } from './components/view-hod/view-hod.component';
import { AssignStaffPopUpComponent } from './components/assign-staff-pop-up/assign-staff-pop-up.component';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { RemoveStaffPopUpComponent } from './components/remove-staff-pop-up/remove-staff-pop-up.component';
import { DisableStaffPopupComponent } from './components/disable-staff-popup/disable-staff-popup.component';

@NgModule({  declarations: []
})
  export class ManageDepartmentSharedModule {
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
    ParentManageDepartmentComponent,
    HomeManageDepartmentComponent,
    EditManageDepartmentComponent,
    DeleteManageDepartmentComponent,
    CreateDepartmentComponent,
    ViewHodComponent,
    AssignStaffPopUpComponent,
    RemoveStaffPopUpComponent,
    DisableStaffPopupComponent
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
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
 
})
export class AppModule { }
