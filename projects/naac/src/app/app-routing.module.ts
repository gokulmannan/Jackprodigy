import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualNaacComponent } from './components/manual-naac/manual-naac.component';
import { NaacParentComponent } from './components/naac-parent/naac-parent.component';
import { NaacReportComponent } from './components/naac-report/naac-report/naac-report.component';
import { NaacTemplateComponent } from './components/naac-template/naac-template/naac-template.component';
import { HomeComponent } from './components/naac/home/home.component';
import { NaacFormEditComponent } from './components/naac/naac-form/naac-form-edit/naac-form-edit.component';
import { NaacFormViewComponent } from './components/naac/naac-form/naac-form-view/naac-form-view.component';
import { NaacFormComponent } from './components/naac/naac-form/naac-form.component';
import { SubmittedComponent } from './components/naac/submitted/submitted.component';

const routes: Routes = [{ path: 'naac', redirectTo: 'naac/home', pathMatch: 'full' },
{
  path: 'naac', component: NaacParentComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'home/:facultyDeptId/:facultyId/:criteria/:templateType', component: HomeComponent },
    { path: 'submitted/:facultyDeptId/:naacTemplateId/:facultyId/:criteria', component: SubmittedComponent },
    { path: 'form/:facultyDeptId/:naacTemplateId/:facultyId/:criteria', component: NaacFormComponent },
    { path: 'form-edit/:naacId/:facultyId/:criteria', component: NaacFormEditComponent },
    { path: 'form-view/:naacId/:facultyId/:facultyDeptId/:criteria', component: NaacFormViewComponent },
    { path: 'template', component: NaacTemplateComponent },
    { path: 'manual', component: ManualNaacComponent },
    { path: 'report', component: NaacReportComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
