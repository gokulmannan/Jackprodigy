import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeManageDepartmentComponent } from './components/home-manage-department/home-manage-department.component';
import { ParentManageDepartmentComponent } from './components/parent-manage-department/parent-manage-department.component';
import { ViewHodComponent } from './components/view-hod/view-hod.component';

const routes: Routes = [

  {path:'manageDepartment', redirectTo:'/manageDepartment/home',pathMatch:'full'},
  
  {
    path: 'manageDepartment', component: ParentManageDepartmentComponent, children: [
        { path: 'home', component: HomeManageDepartmentComponent },
        { path: 'view/:id/:eachDeptId', component: ViewHodComponent },
        
    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
