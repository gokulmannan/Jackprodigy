import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicParentComponent } from './components/academic-parent/academic-parent.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{ path: 'academic', redirectTo: 'academic/home', pathMatch: 'full' },
{
  path: 'academic', component: AcademicParentComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'home/:deptId', component: HomeComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
