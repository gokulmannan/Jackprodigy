import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { UserService } from 'projects/user/_service/user.service';
import { findIndex } from 'rxjs/operators';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 import { DownloadConsolidatePopupComponent } from '../download-consolidate-popup/download-consolidate-popup.component';

@Component({
  selector: 'app-naac-report',
  templateUrl: './naac-report.component.html',
  styleUrls: ['./naac-report.component.css']
})
export class NaacReportComponent implements OnInit {
  facultys:any;
  facId:any;
  naacDatas:any;
  naacId:any;
  showMergeButton: boolean;
  triggerMerge: any;
  naacReportAccess: {};
  clicked: boolean;
  naacFileData: any;
  fileAttachment: any;
  reportRadio:any="FACULTY";
  facultyWise: boolean;
  criteriaWise: boolean;
  criterias: any;
  criteria:any;
  criteriaReports: any;
  facAttachment: boolean;
  facAttachments: boolean;
  facultyIds: any;
  mergenaac: any;
 singleUser: any;
  naacCriteriaExcel: any;
  criteriaExcelByTemplate: any;
  criteriafile: any;
  facultyAttachments: any;
  excelData: any;
  showExcelButton: boolean;
  criteriaVal: any;
  naacFacultyExcel: any;
  types: string[];
  templateType: any;
  files: any;
  fileKeyset: any;
  test: any;
  attachmentWise: boolean;
  reportAttachments: any;
  attachmentCriterias: any;
  criteriaAttach: any;
  facultyAttach: any;
  checkExcel: any;
  fileName: string;
  constructor(private loadingService:LoadingAlertService,
              private naacService:NaacService,
              private modalService:NgbModal,
              private activatedRoute:ActivatedRoute,
              private toastr:ToastrService,
              private userService : UserService) {

   }

  ngOnInit(): void {
    this.getAllFacultys();
   this.getReport("FACULTY");
   this.facultyIds=[];
   this.singleUser={};
   this.getSingleUser();
   this.criteriaReports=[];
   this.criteriaReports.attachment=[];
   this.naacFacultyExcel=[];
   this.excelData=[];
   this.types = ['GENERAL','MEDICAL'];
   if(this.templateType == undefined){
    this.templateType = 'MEDICAL';
    console.log(this.templateType)
    this.getAllFacultys()
   }
  }

  getAllFacultys(){
    this.loadingService.showLoading();
    this.naacService.getAllFacultys().then((data:any)=>{
         this.facultys =data;
         this.loadingService.hideLoading();
    });
  }

getTemplate(id){
  this.loadingService.showLoading();
  if(this.templateType == 'GENERAL'){
  this.naacService.getNaacReportTemplate(id).then((data:any)=>{
    this.naacDatas=data;
    this.getReportAccess(id);
    for(var i=0;i<this.naacDatas.length;i++){
      if(this.naacDatas[i].attachment != undefined){
        this.naacDatas[i].attachment.forEach(eachAttachment => {
          this.files=eachAttachment.files;
       this.files.forEach(eachFile => {
        this.fileKeyset= eachFile.fileKey;
       this.test= this.fileKeyset.split('-');
       eachFile.fileKey=this.test[3];
       eachFile.deptName=this.test[2];
       });
       });
      }
      if(this.naacFacultyExcel != undefined){
      for(var j=0;j<this.naacFacultyExcel.length;j++){
        if(this.naacDatas[i].id == this.naacFacultyExcel[j].naacTemplateId && id == this.naacFacultyExcel[j].facultyId){
this.naacDatas[i].xlsFile=this.naacFacultyExcel[j].xlsFile;
        }
      }
    }
    }
    this.naacDatas = this.naacDatas.sort((a, b) => a.position - b.position);
    this.loadingService.hideLoading();
    this.clicked=false;
  })
}
else if(this.templateType == 'MEDICAL'){
  this.naacService.getMedicalNaacReportTemplate(id).then((data:any)=>{
    this.naacDatas=data;
    this.getReportAccess(id);
    for(var i=0;i<this.naacDatas.length;i++){
      if(this.naacDatas[i].attachment != undefined){
      this.naacDatas[i].attachment.forEach(eachAttachment => {
        this.files=eachAttachment.files;
     this.files.forEach(eachFile => {
      this.fileKeyset= eachFile.fileKey;
     this.test= this.fileKeyset.split('-');
     eachFile.fileKey=this.test[3];
     eachFile.deptName=this.test[2];
     });
     });
    }
       if(this.naacFacultyExcel != undefined){
      for(var j=0;j<this.naacFacultyExcel.length;j++){
        if(this.naacDatas[i].id == this.naacFacultyExcel[j].naacTemplateId && id == this.naacFacultyExcel[j].facultyId){
this.naacDatas[i].xlsFile=this.naacFacultyExcel[j].xlsFile;
        }
      }
    }
    }
    this.naacDatas = this.naacDatas.sort((a, b) => a.position - b.position);
    this.loadingService.hideLoading();
    this.clicked=false;
  })
}
}

getNaacTemplates(facId){
    this.getNaacFacultyConsolidate(facId);
    // this.getTemplate(facId);
  }

 

 export(naacId){
  this.toastr.info("Loading ...")
    this.naacService.downloadTemplate(naacId,this.facId);
    this.toastr.remove
}


openModal(naacId)
{
  const modalRef = this.modalService.open(DownloadConsolidatePopupComponent , { size: 'lg' });
  modalRef.componentInstance.naacTemplateId = naacId;
  modalRef.componentInstance.facultyId = this.facId;
 
} 

mergeTrigger(facultyId)
{
  this.clicked=true;
  this.toastr.info("Merge Processing ...")
this.naacDatas.forEach(eachTemplate => {
  this.naacService.downloadConsolidateFile(eachTemplate.id,facultyId).then((data:any)=>{
    this.triggerMerge=data;
    
  })
});
this.toastr.success("Merge Completed.")
}

getReportAccess(id) {
  this.showMergeButton=false;
  this.naacReportAccess = {};
  this.naacService.getCurrentUserNaacReport(id).then((data: any) => {
    this.naacReportAccess = data;
    if(this.naacReportAccess == 'AUTHORIZED'){
    this.showMergeButton=true;
    }
  });
}


exportConsolidateData(id,type){
this.loadingService.showLoading();
this.toastr.info("Loading ...")
this.naacService.exportConsolidatedExcell(id,type);
this.loadingService.hideLoading();
}

getReport(value){
  if(value == "FACULTY"){
  this.facultyWise=true;
  this.criteriaWise=false;
  this.attachmentWise =false;
  this.facId=undefined;
  this.naacDatas=[];
  this.getAllFacultys();
  }
  else if(value == "CRITERIA"){
    this.criteriaWise=true;
    this.facultyWise=false;
    this.attachmentWise =false;
    this.criteria=undefined;
    this.getCriterias();
    this.getCriteriaReports(this.criteria);
  }
  else if(value == "ATTACHMENTS"){
    this.attachmentWise =true;
    this.criteriaWise=false;
    this.facultyWise=false;
    this.facId=undefined;
    this.attachmentCriterias=undefined;
    this.criteriaAttach =undefined;
    this.facultyAttach = undefined;
    this.reportAttachments=[];
    this.getCriteriaAttachment();
    // this.getCriterias();
    // this.getCriteriaReports(this.criteria);
  }
  }
  
  getCriterias(){
    this.loadingService.showLoading();
    this.naacService.getCriteria().then((data:any)=>{
      this.criterias=data;
      this.loadingService.hideLoading();
    })
  }

  getCriteriaAttachment(){
    this.loadingService.showLoading();
    this.criteria =undefined;
    this.naacService.getCriteria().then((data:any)=>{
      this.attachmentCriterias=data;
      this.reportAttachments=[];
      this.loadingService.hideLoading();
    })
  }
//   getCriteriaReportsAttachment(id,criteria){
//     this.facultyAttach = id;
//     this.criteriaAttach = criteria;
// if(this.templateType == 'GENERAL'){
// this.loadingService.showLoading();
// this.naacService.getReportAttachments(this.facultyAttach,this.criteriaAttach ).then((data:any)=>{
//   this.reportAttachments=data;
//   for(var i=0;i<this.reportAttachments.length;i++){
//     if(this.reportAttachments[i].attachment != undefined){
//       this.reportAttachments[i].attachment.forEach(eachAttachment => {
//         this.files=eachAttachment.files;
//      this.files.forEach(eachFile => {
//       this.fileKeyset= eachFile.fileKey;
//      this.test= this.fileKeyset.split('-');
//      eachFile.fileKey=this.test[3];
//      eachFile.deptName=this.test[2];
//      });
//      });
//     }
//   }
//   this.loadingService.hideLoading();
// })
// }
// else if(this.templateType == 'MEDICAL'){
//   this.loadingService.showLoading();
//   this.naacService.getReportAttachmentsMedical(id,criteria).then((data:any)=>{
//     this.reportAttachments=data;
//       for(var i=0;i<this.reportAttachments.length;i++){
//     if(this.reportAttachments[i].attachment != undefined){
//       this.reportAttachments[i].attachment.forEach(eachAttachment => {
//         this.files=eachAttachment.files;
//      this.files.forEach(eachFile => {
//       this.fileKeyset= eachFile.fileKey;
//      this.test= this.fileKeyset.split('-');
//      eachFile.fileKey=this.test[3];
//      eachFile.deptName=this.test[2];
//      });
//      });
//     }
//   }
//     this.loadingService.hideLoading();
//   }) 
// }
//   }
  
  getCriteriaReports(value){
    this.criteriaVal=value;
   this.loadingService.showLoading();
   this.showExcelButton=false;
    this.naacService.getCriteriaReports(value,this.templateType).then((data:any)=>{
      this.criteriaReports=data;
      this.criteriaReports = this.criteriaReports.sort((a, b) => a.position - b.position);
      this.naacService.getCriteriaExcel(value).then((data:any)=>{
        this.criteriaExcelByTemplate=data;
 });
 this.criteriaExcelByTemplate.forEach(element => {
   this.checkExcel =element.naacTemplateId;
 });

      this.showExcelButton=true;
      this.downloadExcelByCriteria();
     this.loadingService.hideLoading();
    })
  }

  mergeNaacConsolidateTrigger(){
    this.facultyIds=[];
    this.facultys.forEach(eachFaculty => {
this.facultyIds.push(eachFaculty.id)
    });
    this.naacService.naacConsolidateMerge(this.facultyIds).then((data:any)=>{
      this.mergenaac=data;
    });
   
  }

  getSingleUser(){
    this.loadingService.showLoading();
    this.userService.getSingleUser().then((data:any)=>{
         this.singleUser = data;
         this.loadingService.hideLoading();
    });
  }

  downloadExcelByCriteria(){
    this.naacService.downloadExcelByCriteria(this.criteriaVal,this.templateType).then((data:any)=>{
      this.excelData=data;
    });
  }

  getNaacFacultyConsolidate(facId)
{
  this.naacService.getNaacFacultyConsolidate(facId).then((data:any)=>{
this.naacFacultyExcel=data;
this.getTemplate(facId);
  });

}
getTemplatesByType(type){

this.getReport(this.reportRadio);
  }

  getCriteriaReportsAttachments(value){
    this.criteriaVal=value;
   this.loadingService.showLoading();
   this.showExcelButton=false;
    this.naacService.getCriteriaReports(value,this.templateType).then(async(data:any)=>{
      this.reportAttachments=data;
      this.reportAttachments = this.reportAttachments.sort((a, b) => a.position - b.position);

      for(var b=0;b<this.reportAttachments.length;b++){
      await  this.naacService.getCriteriaByFacAttachment(this.reportAttachments[b].id).then((data:any)=>{
          this.facultyAttachments=data;
           this.facultyAttachments.attachment.forEach(eachAttachment => {
             this.files=eachAttachment.files;
          this.files.forEach(eachFile => {
           this.fileKeyset= eachFile.fileKey;
          this.test= this.fileKeyset.split('-');
          eachFile.fileKey=this.test[3];
          eachFile.deptName=this.test[2];
          eachFile.fileNames=this.test[1]+"-"+this.test[2];
          });
          });
          this.reportAttachments[b].attachment=this.facultyAttachments.attachment;
        })
      }
      this.showExcelButton=true;
      this.downloadExcelByCriteria();
     this.loadingService.hideLoading();
    })
  }


  downloadMyFile(data,name){
    this.fileName=name;
    fetch(data)
  .then(res => res.blob()) 
  .then(blob => {
      const data1 = window.URL.createObjectURL(blob); 
   const link = document.createElement('a');
   link.href = data1; 
   link.target="_blank";
   document.body.appendChild(link)
   link.download= this.fileName + '.pdf';
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window })); 
    link.remove();
  })
}

  // downloadMyFile(data,name){
  //   this.naacService.downloadFile(data, name);
  //   this.fileName=name;
  //   fetch(data)
  // .then(res => res.blob()) 
  // .then(blob => {
  //     const data1 = window.URL.createObjectURL(blob); 
  //  const link = document.createElement('a');
  //  link.href = data1; 
  //  link.target="_blank";
  //  document.body.appendChild(link)
  //  link.download= this.fileName + '.pdf';
  //       link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window })); 
  //   link.remove();
  // })
// }

}
