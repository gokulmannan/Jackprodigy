import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { MainPipe } from 'src/app/common/pipe/main-pipe.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import { TimepickerModule } from 'ngx-bootstrap/timepicker';
 import { PopoverModule } from 'ngx-bootstrap/popover';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { UpdateAcademicComponent } from './components/AcademicCrud/update-academic/update-academic.component';
import { AddacdemicyearComponent } from './components/AcademicCrud/addacdemicyear/addacdemicyear.component';
import { EditGroupComponent } from './components/GroupAcademicCurd/edit-group/edit-group.component';
import { AddgroupComponent } from './components/AddingGroup/addgroup/addgroup.component';
import { HomeComponent } from './components/home/home.component';
import { AcademicParentComponent } from './components/academic-parent/academic-parent.component';

@NgModule({  declarations: []})
export class AcademicSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}


@NgModule({
  declarations: [
    AppComponent,HomeComponent, AcademicParentComponent,UpdateAcademicComponent ,AddacdemicyearComponent,
    AddgroupComponent,
    EditGroupComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,NgbModule,
    MainPipe,
    CommonNavModule,ReactiveFormsModule,TimepickerModule.forRoot(),
    PopoverModule.forRoot() 

  ],
  providers: [   DatePipe 
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
