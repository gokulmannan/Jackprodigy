import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageDepartmentService } from '../../_service/manageDepartment.service';

@Component({
  selector: 'app-assign-staff-pop-up',
  templateUrl: './assign-staff-pop-up.component.html',
  styleUrls: ['./assign-staff-pop-up.component.css']
})
export class AssignStaffPopUpComponent implements OnInit {
  @Input() value:any;
  facDept:any;
  //facId:any;
  staffDetail:any;
  faculty:any;
  assignStaff:any;
  staffDepId:any;
  department:any;
  addDepartment:any;
  satffDesignation:any;
  hod:any;
  constructor(public activeModal: NgbActiveModal,
    private toastr:ToastrService,
    private manageDepartmentService:manageDepartmentService,
    private router:Router,
    private config:NgbModalConfig,
    private loadingService:LoadingAlertService) { 
      config.keyboard=false;
      config.backdrop='static';
    }

  ngOnInit() {
    this.getFacDept()
  }
getFacDept(){
  this.manageDepartmentService.getFacDepartment().then((data:any) => {
      this.facDept=data;
  })
}

onselect(faculty){
// this.department =  facId.id;
  this.manageDepartmentService.getFacDepartmentUser(faculty.id).then((data:any) => {
    this.assignStaff=data;
  })
}

select(staffDetail){
this.addDepartment=staffDetail.departmentid;
this.addDepartment.push(this.value)
this.satffDesignation=staffDetail.usertype="HOD";
}

assign(valid){
  if(valid){
  this.loadingService.showLoading();
this.manageDepartmentService.assignStaff(this.staffDetail).then((data:any) => {
  this.hod=data;
  this.loadingService.hideLoading();
  this.activeModal.close();
  this.router.navigate(['/manageDepartment/home']);
  
})
}
else{
  this.toastr.warning("Please provide mandatory fields")
}
}
close(){
  this.activeModal.close()
}

}
