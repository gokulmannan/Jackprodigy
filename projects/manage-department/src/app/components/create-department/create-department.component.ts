import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FacultyServiceService } from 'projects/faculty/_service/faculty-service.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageDepartmentService } from '../../_service/manageDepartment.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  faculties:any=[];
  newDepartment:any;
  createDept:any;
  facDept:any=[];
  facId:any;
  constructor(public activeModal: NgbActiveModal,
               private toastr:ToastrService,
               private manageDepartmentService:manageDepartmentService,
               private config:NgbModalConfig,
               private loadingService:LoadingAlertService) {
                config.backdrop='static';
                config.keyboard=false;
                }

  ngOnInit() {
    this.getFacultys();
    this.createDept={
     
    };
    this.faculties=[];
    this.facDept=[]
   
    
  }

  getFacultys(){
    this.manageDepartmentService.getFacultys().then((data:any[]) => {
      this.faculties=data;
    })
  }

  onselect(facId){
    this.loadingService.showLoading();
    this.manageDepartmentService.getFacultyDepartment(facId).then((data:any) => {
      this.facDept=data;
      this.loadingService.hideLoading();
    })
  }


  createDepartment(valid){
    if(valid){
    this.loadingService.showLoading();
    this.manageDepartmentService.createDepartment(this.createDept).then((data:any) => {
      this.newDepartment=data;
      this.loadingService.hideLoading();
      this.toastr.success("Successfully Created");
       this.activeModal.close();
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
