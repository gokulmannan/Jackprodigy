import { DatePipe, KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
 import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-naac-form-edit',
  templateUrl: './naac-form-edit.component.html',
  styleUrls: ['./naac-form-edit.component.css']
})
export class NaacFormEditComponent implements OnInit {
  naacs: any;
  naacId: any;
  formData: any;
  naacDatas: any;
  facultyId: any;
  requiredFiles: any;
  dateFields:any;
  criteria:any;
  dayfield:any;
  dateConvert: any;
  naacTemplateData: any;
  tempSelect: any;
  naacFields: any=[];
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private naacService: NaacService,
    private fileValidateService: FileValidationService,
    private toastr: ToastrService,
    private loadingService: LoadingAlertService,
    private confirmationPopupService: ConfirmationPopupService,
    private datepipe: DatePipe) {
    this.facultyId = this.activatedRoute.snapshot.paramMap.get("facultyId");
    this.naacId = this.activatedRoute.snapshot.paramMap.get("naacId");
    this.criteria= this.activatedRoute.snapshot.paramMap.get("criteria");

    this.naacs = {};
    this.formData = {};
    this.getNaacByIdWithLabel();
  }
  ngOnInit(): void {
  }

  getForm(naac,fields){
    this.loadingService.showLoading();
    this.naacService.getForm(naac.naacTemplateId).then((data:any)=>{
        this.naacTemplateData = data;
        for (var key in this.naacTemplateData.fields) {
var val = this.naacs.fieldValues[key];
if(val.type == 'select'){
  if(!fields.includes(key)){
    this.tempSelect=this.naacTemplateData.fields[key];
  }
}
        }
        this.loadingService.hideLoading();
    });
  }

  getNaacByIdWithLabel() {
    this.loadingService.showLoading();
    this.naacService.getNaacByIdWithLabel(this.naacId).then((data: any) => {
      this.naacs = data;
      if (this.naacs != undefined) {
        this.setRequiredFiles();
        this.setNaacDateField();
      }
      this.loadingService.hideLoading();
      for (var key in this.naacs.fields) {
        this.naacFields.push(key);
      }
      for (var key in this.naacs.fieldValues) {
        
        if (this.naacs.fieldValues.hasOwnProperty(key)) {
          var val = this.naacs.fieldValues[key];
          if(val.type == 'date'){
            var dateConvert = val.value.split("/", 3); 
           var day=dateConvert[0];
           var month=dateConvert[1];
           var year=dateConvert[2];
           var finalDate=month+"/"+day+"/"+year;
           this.naacs.fieldValues[key].value=finalDate;
            
          }
        }
      }
      this.getForm(this.naacs,this.naacFields);
    });
  }
  updateNaac() {
    let obj = {};
    for (let key in this.naacs.fieldValues) {
      for (let nestedKey in this.naacs.fieldValues[key]) {
        if (nestedKey == 'value') {
          this.naacs.fields[key] = this.naacs.fieldValues[key][nestedKey];
        }
      }
    }
    this.loadingService.showLoading();
    for (var i = 0; i < this.requiredFiles.length; i++) {
      if (this.naacs.fields[this.requiredFiles[i]] == undefined) {
        this.toastr.error(this.naacs.fieldValues[this.requiredFiles[i]]["label"] + "  " + "required");
        this.loadingService.hideLoading();
        return;
      }
    }
    for(var j=0;j<this.dateFields.length;j++){
      if(this.naacs.fields[this.dateFields[j]]!=undefined){
        this.naacs.fields[this.dateFields[j]] = this.datepipe.transform(this.naacs.fields[this.dateFields[j]], 'dd/MM/yyyy')
         
      }
    }
    this.naacService.updateNaac(this.naacs).then((data: any) => {
      this.loadingService.hideLoading();
      this.toastr.success("Updated succesfully");
      this.router.navigate(['/naac/submitted', this.naacs.facultyDeptId, this.naacs.naacTemplateId, this.facultyId,this.criteria])
    });
  }

  update() {
    this.loadingService.showLoading();
    this.naacService.updateNaac(this.naacs).then((data: any) => {
      this.getNaacByIdWithLabel();
    });
  }
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
  goBack() {
    this.router.navigate(['/naac/form-view', this.naacId, this.facultyId, this.naacs.facultyDeptId,this.criteria])
  }

  uploadFiles(fileData: FileList, fileId) {
    var file = fileData.item(0);
    if (file != undefined) {
      var fileStatus = this.fileValidateService.validateNaacFile(file,this.naacs.fieldValues[fileId]["regex"])
      if (fileStatus == "valid") {
        if (this.naacs.fieldValues[fileId]["versionId"] == undefined) {
          this.loadingService.showLoading();
          this.naacService.uploadAttachment(file).then((data: any) => {
            this.setFileData(data, fileId);
          });
        } else {
          this.loadingService.showLoading();
          this.naacService.putAttachment(file, this.naacs.fieldValues[fileId]["versionId"], this.naacs.fieldValues[fileId]["fileKey"]).then((data: any) => {
            this.setFileData(data, fileId);
          });
        }
      } else {
        this.toastr.error(fileStatus)
      }
    }
  }
  setFileData(data, fileId) {
    let obj = {};
    if (data.versionId != undefined && data.fileKey != undefined) {
      obj["versionId"] = data.versionId;
      obj["fileKey"] = data.fileKey;
      this.naacs.fields[fileId] = obj;
      this.loadingService.hideLoading();
      this.toastr.success("File uploaded succesfully");
      this.update();
    }
  }
  removeFile(fileId) {
    for (let key in this.naacs.fieldValues) {
      if (key == fileId) {
        this.naacs.fieldValues[key]["fileKey"] = null;
        this.naacs.fieldValues[key]["url"] = null;
      }
    }
  }
  setRequiredFiles() {
    this.requiredFiles = [];
    for (let key in this.naacs.fieldValues) {
      if (this.naacs.fieldValues[key]["type"] == "file" && this.naacs.fieldValues[key]["required"] == "true") {
        this.requiredFiles.push(key);
      }
    }
  }
  setNaacDateField(){
    this.dateFields = [];
    for (let key in this.naacs.fields) {
      if(this.naacs.fieldValues[key]["type"] == "date"){
        this.dateFields.push(key);
      }
    }
  }

  removeFileFromDb(key) {
    this.confirmationPopupService.confirm('Confirmation', 'Do you really want to delete attachment... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteFile(key);
        }
      });
  }

  deleteFile(key) {
    this.naacService.deleteFile(this.naacs.fields[key].versionId, this.naacs.fields[key].fileKey).then((data: any) => {
      this.naacs.fields[key] = undefined;
      this.naacService.updateNaac(this.naacs).then((data: any) => {
        this.getNaacByIdWithLabel();
      });
    });
 
 
  }
  
}
