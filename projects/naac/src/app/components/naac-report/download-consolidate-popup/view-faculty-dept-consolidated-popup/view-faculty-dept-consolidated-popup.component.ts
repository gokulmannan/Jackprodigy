import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
 import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-view-faculty-dept-consolidated-popup',
  templateUrl: './view-faculty-dept-consolidated-popup.component.html',
  styleUrls: ['./view-faculty-dept-consolidated-popup.component.css']
})
export class ViewFacultyDeptConsolidatedPopupComponent implements OnInit {

  @Input() facDeptId:any;
  @Input() naacTemplateId:any;
  @Input() fileName:any;
  @Input() facultyDeptName:any;
    file: any;
    naacData:any;
    facultys:any;
    facultyId:any;
    showdata:any;
    showLoading:any;
    naacFileData:any;
    status:any;
  btnDisable: boolean;
  singleUser:any;
    constructor(
      public activeModal: NgbActiveModal,
      private toastr: ToastrService,
      private loadingService :LoadingAlertService,
      private naacService :NaacService,
      private config:NgbModalConfig,
      private userService :UserService
    ) { 
      config.backdrop = 'static';
        config.keyboard = false;
    }
  
    ngOnInit(): void {
      this.singleUser = {};
      this.getSingleUser();
      this.naacData=[];
      this.naacFileData=[];
      this.getnaacData();
      this.getFacultyDeptConsolidatedFile();
     
    }
  
    getSingleUser(){
      this.loadingService.showLoading();
      this.userService.getSingleUser().then((data:any)=>{
           this.singleUser = data;
           this.loadingService.hideLoading();
      });
    }
  getnaacData(){
    
    this.showLoading=true;
    let query = '?query=filter:naacTemplateId eq' + ' ' + this.naacTemplateId + ',facultyDeptId eq ' + this.facDeptId  ; 
    this.loadingService.showLoading();
    this.naacService.getNaacWithLabel(query).then((data:any)=>{
      this.naacData =data;
      this.naacData = this.naacData.sort((a, b) => b.createdOn - a.createdOn);
      this.showdata=true;
      this.showLoading=false;
      this.loadingService.hideLoading();
  });
  }
  getFacultyDeptConsolidatedFile(){
    
   // this.showLoading=true;
    this.naacService.getFacultyDeptNaacFile(this.naacTemplateId,this.facDeptId).then((data:any)=>{
        this.naacFileData = data;
        this.showdata = true;
        if(this.naacFileData.length >0 && this.naacFileData[0].status == 'PROCESSING'){
          this.btnDisable = true;
        }
      //  this.showLoading=false;
  });
}
originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
  return 0;
}
downloadFiles(){
  if(this.naacFileData.length >0){
    this.updatefacultyDeptConsolidated();
  }
  this.naacService.downloadReqForFacDepConsolidateFile(this.naacTemplateId,this.facDeptId).then((data:any)=>{
    this.toastr.success("Request Sent Successfully")
  });
}
updatefacultyDeptConsolidated(){
  this.naacFileData[0].status = "PROCESSING";
  this.naacService.updatefacultyDeptConsolidated(this.naacFileData[0]).then((data:any)=>{
    this.getFacultyDeptConsolidatedFile();
  });}
}