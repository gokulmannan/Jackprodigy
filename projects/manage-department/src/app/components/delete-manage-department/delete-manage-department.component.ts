import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageDepartmentService } from '../../_service/manageDepartment.service';

@Component({
  selector: 'app-delete-manage-department',
  templateUrl: './delete-manage-department.component.html',
  styleUrls: ['./delete-manage-department.component.css']
})
export class DeleteManageDepartmentComponent implements OnInit {
  @Input() value:any;
  hod:any;
  findId:any;
  test:any;
  deptId:any;
  hodList:any;
  hodListId:any;
  hodListData:any;
  constructor(public activeModal: NgbActiveModal,
              private config:NgbModalConfig,
              private toastr:ToastrService,
              private manageDepartmentService:manageDepartmentService,
              private loadingService:LoadingAlertService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit() {
  
  }

  deleteDepartment(){
    this.loadingService.showLoading();
   if(this.value.hod != undefined){
    this.hodList=this.value.hod;
    for(var i=0;i<this.hodList.length;i++){
       this.hodListId=this.hodList[i].departmentid;
       var idx=this.hodListId.indexOf(this.value.id);
       if(idx > -1){
       this.hodListId.splice(idx,1)
       
       }
       this.manageDepartmentService.assignStaff(this.hodList[i]).then((data:any) => {
         this.hodListData=data;
      })
      }
    }
      
        this.manageDepartmentService.deleteDepartment(this.value.id).then((data:any) => {
          this.loadingService.hideLoading();
            this.toastr.success("Deleted Successfully");
            this.activeModal.close()
        })
  }

  close(){
    this.activeModal.close()
  }

}
