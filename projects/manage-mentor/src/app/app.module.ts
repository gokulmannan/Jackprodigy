import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { FromDateComponent } from './components/from-date/from-date.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DeletePopCommentComponent } from './components/delete-pop-comment/delete-pop-comment.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { DeleteMentorLogComponent } from './components/delete-mentor-log/delete-mentor-log.component';
import { ToDateComponent } from './components/to-date/to-date.component';
import { ParentsideBarComponent } from './components/parentside-bar/parentside-bar.component';
import { MystudentsComponent } from './components/mystudents/mystudents.component';

@NgModule({  declarations: []
})
export class ManageMentorSharedModule { 

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
    HomeComponent,
    StudentDetailsComponent,
    ProfileComponent, 
    AddStudentComponent,FromDateComponent, DeletePopCommentComponent ,AddCommentComponent,EditCommentComponent,
    DeleteMentorLogComponent,
    ToDateComponent,
    ParentsideBarComponent,
    MystudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgSelectModule, 
    ReactiveFormsModule,
NgbModule ,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
