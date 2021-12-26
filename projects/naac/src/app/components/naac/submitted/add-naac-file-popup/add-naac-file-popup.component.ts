import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
 import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-add-naac-file-popup',
  templateUrl: './add-naac-file-popup.component.html',
  styleUrls: ['./add-naac-file-popup.component.css']
})
export class AddNaacFilePopupComponent implements OnInit {
  @Input() naacId:any;
  @Input() fileLabel:any;
  @Input() facultyDeptId:any;
  @Input() facultyId:any;
  @Input() criteria:any;
  naac: any;
  getFile: any;
  fieldValue: any;
  formData:any;
  fieldsAdd: any;
  fieldFile: any;
  constructor(private loadingService:LoadingAlertService,
    private naacService:NaacService,
    private activeModal:NgbActiveModal,
    private fileValidateService:FileValidationService,
    private toastr:ToastrService,
    private confirmationPopupService:ConfirmationPopupService,
    private router:Router) { }

  ngOnInit(): void {
    this.getNaacByIdWithLabel()
    this.naac={}
    this.getFile={}
    this.formData=[]
  }

  getNaacByIdWithLabel() {
    this.loadingService.showLoading();
    this.naacService.getNaacByIdWithLabel(this.naacId).then((data: any) => {
      this.naac = data;
      
      this.loadingService.hideLoading();
      for (var key in this.naac.fieldValues) {
        if (this.naac.fieldValues.hasOwnProperty(key)) {
          var changeFile = this.naac.fieldValues[key];
        
          if(changeFile.type =='file' && changeFile.label == this.fileLabel){
            this.getFile=changeFile;
            this.fieldFile=key;
          }
        }
      }
    
    });
  }
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  uploadFiles(fileData: FileList,fileId)
{
  var file = fileData.item(0);
  let obj = {};
  if(file != undefined){
    var fileStatus = this.fileValidateService.validateNaacFile(file,this.getFile.regex)
          if( fileStatus == "valid"){
            this.loadingService.showLoading();
    this.naacService.uploadAttachment(file).then((data: any) => {
          if(data.versionId != undefined && data.fileKey != undefined){
            this.formData[fileId] = obj;
            this.getFile.fileKey=data.fileKey;
            this.getFile.versionId=data.versionId;
            this.naac.fields[this.fieldFile]=this.getFile;
            this.loadingService.hideLoading();
            this.toastr.success("File uploaded succesfully");
            this.naacService.updateNaac(this.naac).then((data:any)=>{
              this.loadingService.hideLoading();
              this.toastr.success("Created succesfully");
            //  this.router.navigate(['/naac/submitted',this.facultyDeptId,this.naac.naacTemplateId,this.facultyId,this.criteria]);
              this.activeModal.close();
            });

          }
    });

   

  }else{
    this.toastr.error(fileStatus)
  }
}
}

removeFile(fileId) {
  for (let key in this.naac.fieldValues) {
    if (key == fileId) {
      this.naac.fieldValues[key]["fileKey"] = null;
      this.naac.fieldValues[key]["url"] = null;
    }
  }
}

close(){
  this.activeModal.close();
    }


}
