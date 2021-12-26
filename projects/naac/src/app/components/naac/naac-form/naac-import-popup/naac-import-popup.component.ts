import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
 import { FileValidationService } from 'src/app/common/service/file-validation.service';

@Component({
  selector: 'app-naac-import-popup',
  templateUrl: './naac-import-popup.component.html',
  styleUrls: ['./naac-import-popup.component.css']
})
export class NaacImportPopupComponent implements OnInit {
@Input() naacTemplateId:any;
@Input() facultyDeptId:any;
showLoading:boolean=false;
showError:boolean=false;
status:any;
showButton:boolean=true;
naacData:any;
constructor( public activeModal: NgbActiveModal,
                public naacService : NaacService,
                public toasterService : ToastrService,
                private fileValidateService: FileValidationService) {

                 }

  ngOnInit() {
    this.status ={};
    this.naacData = {};
    this.getNaacTemplate();
  }
close(){
  this.activeModal.close();
}
getNaacTemplate(){
  this.naacService.getTemplateById(this.naacTemplateId).then((data:any)=>{
      this.naacData = data;
  });
}
uploadFiles(fileData: FileList) {
  var file = fileData.item(0);
  this.showError = false;
  if(file  != undefined){
    var fileStatus = this.fileValidateService.validateNaacFile(file,"(xls|XLS|xlsx|XLSX)")
    if( fileStatus == "valid"){
    this.showLoading = true;
    this.showButton = false;
    this.naacService.importExcel(this.naacTemplateId,this.facultyDeptId,file).then((data:any)=>{
      this.status = data
      if(data == "SUCCESS"){
        this.toasterService.success("Excel uploded successfully")
        this.activeModal.close();
      }else{
        this.showError = true;
      }
      this.showLoading = false;
      this.showButton = true;
    });
  }else{
    this.toasterService.error(fileStatus)
  }
  }else{
    this.toasterService.error("please select a file")
  }
  
}

exportAsXLSX() {
  this.naacService.exportAsXLSX(this.naacTemplateId,this.naacData.subCriteria);
 
}
}
