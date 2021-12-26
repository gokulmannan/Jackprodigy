import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FacultyServiceService } from 'projects/faculty/_service/faculty-service.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageDepartmentService } from '../../_service/manageDepartment.service';

@Component({
  selector: 'app-edit-manage-department',
  templateUrl: './edit-manage-department.component.html',
  styleUrls: ['./edit-manage-department.component.css']
})
export class EditManageDepartmentComponent implements OnInit {
  @Input() value:any;
  editDept:any;
  facDept:any;
  facId:any;
  fac:any;
  allfacDept:any;
  updateDept:any;
  constructor(public activeModal: NgbActiveModal,
             private toastr:ToastrService,
              config: NgbModalConfig,
              private facultyService:FacultyServiceService,
              private manageDepartmentService:manageDepartmentService,
              private loadingService:LoadingAlertService) {
                config.backdrop = 'static';
                config.keyboard = false;
               }

  ngOnInit() {
    if(this.value != null){
      this.editDept = this.value;
    }
    this.getFacultys();
    this.getFaculty();
    this.getFacultyDepartment();
   

  }

  getFaculty(){
    this.facultyService.getFaculty(this.editDept.facultyDeptId).then((data:any) => {
           this.facDept=data;
           this.editDept.facultyId=   this.facDept.facultyId;
    })
  }

  getFacultys(){
    this.manageDepartmentService.getFacultys().then((data:any[]) => {
      this.fac=data;
    })
  }

  getFacultyDepartment(){
    this.facultyService.getAllFacultyDept().then((data:any[]) => {
      this.facDept=data;
    })
  }
  onselect(facId){
    this.manageDepartmentService.getFacultyDepartment(facId).then((data:any) => {
      this.facDept=data;
    })
  }
  updateDepartment(valid){
    if(valid){
          this.loadingService.showLoading();
     this.manageDepartmentService.editDepartment(this.editDept).then((data:any) => {
       this.updateDept=data;
       this.loadingService.hideLoading();
       this.toastr.success("Successfully Updated");
       this.activeModal.close()
     })
    }
    else{
      this.toastr.warning("Please provide mandatory fields");
    }
  }

  close(){
    this.activeModal.close()
  }

}
