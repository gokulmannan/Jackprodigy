import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 import { ViewFacDeptFilesComponent } from '../view-fac-dept-files/view-fac-dept-files.component';
import { ViewFacultyDeptConsolidatedPopupComponent } from './view-faculty-dept-consolidated-popup/view-faculty-dept-consolidated-popup.component';

@Component({
  selector: 'app-download-consolidate-popup',
  templateUrl: './download-consolidate-popup.component.html',
  styleUrls: ['./download-consolidate-popup.component.css']
})
export class DownloadConsolidatePopupComponent implements OnInit {
  @Input() naacTemplateId:any;
  @Input() facultyId:any;
  mergeFiles: any=[];
  naacData:any;
  naacTemplate:any=[];
  facultys:any;
  showCard:boolean;
  naacfilesDept:any;
  facultyDepartments: any;
  sendNaacTemplateId:any;
  facDeptId:any;
  showLoading:any;
  btnDisable:any;
  singleUser:any;
  constructor(public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private loadingService :LoadingAlertService,
    private naacService :NaacService,
    public config:NgbModalConfig,
    private modalService:NgbModal,
    private userService : UserService) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit(): void {
    this.singleUser = {};
    this.getSingleUser();
    this.getForm();
    this.getFilesNaac()
    this.mergeFiles
    this.naacData=[]
    this.facultys = {};
    this.getFaculty()
    this.getAllFacultyDepartments(this.facultyId)
  }

  getSingleUser(){
    this.loadingService.showLoading();
    this.userService.getSingleUser().then((data:any)=>{
         this.singleUser = data;
         this.loadingService.hideLoading();
    });
  }
  getForm(){
    this.loadingService.showLoading();
    this.showLoading=true;
    this.naacService.getForm(this.naacTemplateId).then((data:any)=>{
        this.naacTemplate = data;
        this.showLoading=false;
        this.showCard=true;
        this.loadingService.hideLoading();
    });
  }
  downloadFiles(){
    if(this.naacData.length >0){
      this.updatefacultyConsolidated();
    }
    this.naacService.downloadConsolidateFile(this.naacTemplateId,this.facultyId).then((data:any)=>{
      this.mergeFiles=data;
      this.toastr.success("Request Sent Successfully")

    })
  }

  getFilesNaac(){
    this.naacService.getNaacFile(this.naacTemplateId,this.facultyId).then((data:any)=>{
      this.naacData=data;
      if(this.naacData.length >0 && this.naacData[0].status == 'PROCESSING'){
        this.btnDisable = true;
      }
      this.naacData = this.naacData.sort((a, b) => b.createdOn - a.createdOn);
    })
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  getFaculty(){
    this.loadingService.showLoading();
    this.naacService.getFaculty(this.facultyId).then((data:any)=>{
         this.facultys =data;
         this.loadingService.hideLoading();
    });
  }

  getAllFacultyDepartments(facultyId){
    this.loadingService.showLoading();
    this.naacService.getAllFacultyDepartments(facultyId).then((data:any)=>{
         this.facultyDepartments =data;
         this.loadingService.hideLoading();
    });
  }

  viewFiles(id,fileName){
    const modalRef = this.modalService.open(ViewFacDeptFilesComponent , { size: 'lg' });
  modalRef.componentInstance.facDeptId = id; 
  modalRef.componentInstance.fileName = fileName;
  modalRef.componentInstance.sendNaacTemplateId = this.naacTemplateId;
  }
  openFacultyDeptConsolidatedPopup(id,fileName,name){
    const modalRef = this.modalService.open(ViewFacultyDeptConsolidatedPopupComponent , { size: 'lg' });
  modalRef.componentInstance.facDeptId = id; 
  modalRef.componentInstance.fileName = fileName;
  modalRef.componentInstance.facultyDeptName = name;
  modalRef.componentInstance.naacTemplateId = this.naacTemplateId;
  }

  updatefacultyConsolidated(){
    this.naacData[0].status = "PROCESSING";
    this.naacService.updatefacultyConsolidated(this.naacData[0]).then((data:any)=>{
      this.getFilesNaac();
    });
  }
}
