import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageDepartmentService } from '../../_service/manageDepartment.service';

@Component({
  selector: 'app-remove-staff-pop-up',
  templateUrl: './remove-staff-pop-up.component.html',
  styleUrls: ['./remove-staff-pop-up.component.css']
})
export class RemoveStaffPopUpComponent implements OnInit {
  @Input() value:any;
  staffDetail:any;
  removedDept:any;
  constructor(public activeModal: NgbActiveModal,
    private config:NgbModalConfig,
    private toastr:ToastrService,
    private manageDepartmentService:manageDepartmentService,
    private loadingService:LoadingAlertService,
    private router:Router) {
config.backdrop = 'static';
config.keyboard = false;
}

  ngOnInit(): void {
    this.staffDetail=this.value;
  }

  removeStaff(){
    // this.departmentIds=this.staffDetail.departmentid;
  // var idx=this.departmentIds.indexOf(this.deptId);
  // if (idx > -1) {
  //   this.departmentIds.splice(idx, 1);
  // }
  this.loadingService.showLoading();
  this.manageDepartmentService.assignStaff(this.staffDetail).then((data:any) => {
    this.removedDept=data;
    this.loadingService.hideLoading();
    this.toastr.success("Staff removed Successfully");
    this.activeModal.close();
    //this.router.navigate(['/manageDepartment/home']);
  })
  }

  close(){
    this.activeModal.close()
  }


}
