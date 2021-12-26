import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageDepartmentService } from '../../_service/manageDepartment.service';
import { DisableStaffPopupComponent } from '../disable-staff-popup/disable-staff-popup.component';
import { RemoveStaffPopUpComponent } from '../remove-staff-pop-up/remove-staff-pop-up.component';

@Component({
  selector: 'app-view-hod',
  templateUrl: './view-hod.component.html',
  styleUrls: ['./view-hod.component.css']
})
export class ViewHodComponent implements OnInit {
  userDetail:any;
  staffDetail:any;
  deptId:any;
  test:any;
  testremove:any;
  removedDept:any;
  disablestaff:any;
  disabledStaff:any;
  departmentIds:any;
  constructor(private activatedRoute:ActivatedRoute,
              private loadingService:LoadingAlertService,
               private manageDepartmentService:manageDepartmentService,
               private router:Router,
               private modalService:NgbModal,
               config: NgbModalConfig) {

    this.userDetail = this.activatedRoute.snapshot.paramMap.get("id");
    this.deptId = this.activatedRoute.snapshot.paramMap.get("eachDeptId");
   }

  ngOnInit(){
    this.getStaffDetail(this.userDetail,this.deptId);
    this.staffDetail={}
    
  }
getStaffDetail(userDetail,deptId){
  this.manageDepartmentService.getstaffDetail(userDetail).then((data:any) =>
  {
    this.staffDetail=data;
  })
}

removeStaff(staffDetail){

this.departmentIds=this.staffDetail.departmentid;
  var idx=this.departmentIds.indexOf(this.deptId);
  if (idx > -1) {
    this.departmentIds.splice(idx, 1);
  }
  const modalRef = this.modalService.open(RemoveStaffPopUpComponent, { size: 'lg' });
  modalRef.componentInstance.value = staffDetail;
  modalRef.result.then(() => {
});


  // this.departmentIds=this.staffDetail.departmentid;
  // var idx=this.departmentIds.indexOf(this.deptId);
  // if (idx > -1) {
  //   this.departmentIds.splice(idx, 1);
  // }
  // this.manageDepartmentService.assignStaff(this.staffDetail).then((data:any) => {
  //   this.removedDept=data;
  //   this.router.navigate(['/manageDepartment/home']);
  // })
}

disableStaff(staffDetail){
  const modalRef = this.modalService.open(DisableStaffPopupComponent, { size: 'lg' });
  modalRef.componentInstance.value = staffDetail;
  modalRef.result.then(() => {
});
  
  // this.staffDetail.accountStatus="DISABLE";
  // this.manageDepartmentService.assignStaff(this.staffDetail).then((data:any) => {
  //   this.disabledStaff=data;
  //   this.router.navigate(['/manageDepartment/home']);
  // })
}
}
