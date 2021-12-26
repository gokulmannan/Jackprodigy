import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Department } from 'projects/department/_models/department';
import { DepartmentrService } from 'projects/department/_service/department.service';
import { DepartmentProvider } from 'projects/department/_provider/department.provider';
@Component({
  selector: 'app-department-nav',
  templateUrl: './department-nav.component.html',
  styleUrls: ['./department-nav.component.css']
})
export class DepartmentNavComponent implements OnInit {
public departments:Department [];
public dept:any="";
department:any='';
@Output('deptNav') depNav=new EventEmitter<any>();


  constructor(private departmentrService:DepartmentrService, private departmentProvider:DepartmentProvider) {
   
   }

  ngOnInit() {
    this.dept=null;
    this.getDepartments()
  }
onSelect(department)
{
  //console.log(department)
  this.depNav.emit({"department":department});
 
}

  getDepartments()
   {
    this.departmentrService.list().then((data:Department[])=>{
      this.departments = data;
    });
  }
}
