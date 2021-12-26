import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { manageDepartmentService } from '../../_service/manageDepartment.service';
import { AssignStaffPopUpComponent } from '../assign-staff-pop-up/assign-staff-pop-up.component';
import { CreateDepartmentComponent } from '../create-department/create-department.component';
import { DeleteManageDepartmentComponent } from '../delete-manage-department/delete-manage-department.component';
import { EditManageDepartmentComponent } from '../edit-manage-department/edit-manage-department.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
@Component({
  selector: 'app-home-manage-department',
  templateUrl: './home-manage-department.component.html',
  styleUrls: ['./home-manage-department.component.css']
})
export class HomeManageDepartmentComponent implements OnInit {
  allDepartments:any=[];
  userData:any;
  hod:any;
  departmentid:any;
  id:any;
  hodName:any;
  depId:any;
  //eachDeptId:any;
  dept:any;
  deptId:any;
  hodDetail:any;
  staffId:any;
  staffDeptId:any;
  hodList:any;
  hodListId:any;
  hodListData:any;
  constructor(private loadingService:LoadingAlertService,
              private manageDepartmentService:manageDepartmentService,
              private modalService:NgbModal,config: NgbModalConfig,
              private router:Router,
              private activatedRoute:ActivatedRoute) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.getAllDepartment();
  }

   getAllDepartment() {
    this.loadingService.showLoading();
  this.manageDepartmentService.getAllDepartments().then(async (data:any[]) => {
    this.allDepartments = data;
    for(var i=0;i<this.allDepartments.length;i++){
      this.depId =this.allDepartments[i].id;
     await this.getUsers(this.depId,i);
    }
    this.loadingService.hideLoading();
  });
}

 getUsers(id,i){
  this.loadingService.showLoading();
  this.manageDepartmentService.getUsers(id).then((data:any[]) => {
    this.allDepartments[i].hod=data;
  })
  this.loadingService.hideLoading();
}

createDepartment(){
  const modalRef = this.modalService.open(CreateDepartmentComponent, { size: 'lg' });
  modalRef.result.then(() => {
    this.getAllDepartment() 
});
}

editDepartment(data){
  const modalRef = this.modalService.open(EditManageDepartmentComponent, { size: 'lg' });
  modalRef.componentInstance.value = data;
  modalRef.result.then(() => {
    this.getAllDepartment() ;
});
}

deleteDepartment(data){
  const modalRef = this.modalService.open(DeleteManageDepartmentComponent, { size: 'sm' });
  modalRef.componentInstance.value = data;
  modalRef.result.then(() => {
    this.getAllDepartment() ;

});
}

viewStaff(hodDetail,dept){

this.staffId=hodDetail.id;
this.staffDeptId=dept.id;
this.router.navigate(['/manageDepartment/view',this.staffId,this.staffDeptId]);
}

assignStaff(deptId){
  const modalRef = this.modalService.open(AssignStaffPopUpComponent, { size: 'lg' });
  modalRef.componentInstance.value = deptId;
  modalRef.result.then(() => {
    this.getAllDepartment();
  });
}


}
