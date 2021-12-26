import { MystudentsComponent } from './components/mystudents/mystudents.component';
import { ParentsideBarComponent } from './components/parentside-bar/parentside-bar.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'manageMentor', redirectTo: '/manageMentor/home', pathMatch: 'full' },
  {
    path: 'manageMentor', component: ParentsideBarComponent, children: [
      { path: 'home', component: HomeComponent },
     {path:'myStudents',component:MystudentsComponent},
      { path: 'home/:id', component: HomeComponent },
      { path: 'studentDetails/:staffId/:id', component: StudentDetailsComponent },
      { path: 'profile/:id/:staffId/:userId/:mentorId', component: ProfileComponent }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
