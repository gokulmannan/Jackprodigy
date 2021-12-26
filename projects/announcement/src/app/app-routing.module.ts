import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementComponent } from './_components/announcement/announcement.component';
import { ComposeannouncementComponent } from './_components/announcement/composeannouncement/composeannouncement.component';
import { SendannouncementComponent } from './_components/announcement/sendannouncement/sendannouncement.component';
import { PreviewannouncementComponent } from './_components/announcement/previewannouncement/previewannouncement.component';
import { AnnouncementParentComponent } from './_components/announcement/announcement-parent/announcement-parent.component';
import { ViewSmsComponent } from './_components/announcement/view-sms/view-sms.component';
import { SentSmsComponent } from './_components/sent-sms/sent-sms.component';
import { MonthlySmsComponent } from './_components/monthly-sms/monthly-sms.component';


const routes: Routes = [
  {path:'announcement', redirectTo:'/announcement/home',pathMatch:'full'},
  { path: 'announcement', component: AnnouncementParentComponent ,children:[
    { path: 'home', component: AnnouncementComponent },
    { path: 'compose', component: ComposeannouncementComponent },
    { path: 'send', component: SendannouncementComponent },
    { path: 'preview', component: PreviewannouncementComponent },
    { path: 'sentsms', component: SentSmsComponent },
    { path: 'monthlysms', component:MonthlySmsComponent },
  ],
  },
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
