import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbAlertModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './_components/announcement/announcement.component';
import { SendannouncementComponent } from './_components/announcement/sendannouncement/sendannouncement.component';
import { ComposeannouncementComponent } from './_components/announcement/composeannouncement/composeannouncement.component';
import { PreviewannouncementComponent } from './_components/announcement/previewannouncement/previewannouncement.component';
import { AnnouncementParentComponent } from './_components/announcement/announcement-parent/announcement-parent.component';
import { SelectEachMembersPopupComponent } from './_components/announcement/select-members/select-each-members-popup/select-each-members-popup.component';
import { SelectMembersComponent } from './_components/announcement/select-members/select-members.component';
import { CommonModule } from '@angular/common';
import { CommonNavModule } from 'src/app/common/common-nav.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StudentSelectMembersPopupComponent } from './_components/announcement/select-members/student-select-members-popup/student-select-members-popup.component';
import { ViewSmsComponent } from './_components/announcement/view-sms/view-sms.component';
import { ViewReceiversPopupComponent } from './_components/announcement/sendannouncement/view-receivers-popup/view-receivers-popup.component';
import { ViewReceiversCountPopupComponent } from './_components/announcement/sendannouncement/view-receivers-count-popup/view-receivers-count-popup.component';
import { MaterialModule } from 'src/app/common/material.module';
import { ViewHomeMessageComponent } from './_components/announcement/view-home-message/view-home-message.component';
import { PopmodelComponent } from './_components/announcement/displayMessage/popmodel/popmodel.component';
import { SentSmsComponent } from './_components/sent-sms/sent-sms.component';
import { MonthlySmsComponent } from './_components/monthly-sms/monthly-sms.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({  declarations: []
})
export class AnnouncementSharedModule {
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
    AnnouncementParentComponent,
    AnnouncementComponent,
    ComposeannouncementComponent,
    SendannouncementComponent,
    PreviewannouncementComponent,
    SelectMembersComponent, 
    SelectEachMembersPopupComponent,
    StudentSelectMembersPopupComponent,
    ViewSmsComponent,
    ViewReceiversCountPopupComponent,
    ViewReceiversPopupComponent,
    ViewHomeMessageComponent,
    PopmodelComponent,SentSmsComponent,
     MonthlySmsComponent,
     MonthlySmsComponent,
     SentSmsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbTooltipModule,
    BrowserAnimationsModule,
    CommonModule,
    Ng2SearchPipeModule,
    CommonNavModule,
    MaterialModule,
    BsDatepickerModule.forRoot()

  ],
  exports :[
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
