import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageDepartmentService } from '../../_service/manageDepartment.service';

@Component({
  selector: 'app-disable-staff-popup',
  templateUrl: './disable-staff-popup.component.html',
  styleUrls: ['./disable-staff-popup.component.css']
})
export class DisableStaffPopupComponent implements OnInit {
  @Input() value:any;
  staffDetail:any;
  disabledStaff:any;
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

  disableStaff(){
    this.loadingService.showLoading();
     this.staffDetail.accountStatus="DISABLE";
  this.manageDepartmentService.assignStaff(this.staffDetail).then((data:any) => {
    this.disabledStaff=data;
    this.loadingService.hideLoading();
    this.toastr.success("Staff Disabled Successfully");
    this.activeModal.close();
   // this.router.navigate(['/manageDepartment/home']);
  })
  }

  close(){
    this.activeModal.close()
  }


}
