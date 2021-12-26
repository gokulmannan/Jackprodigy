import { DatePipe, KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 
@Component({
  selector: 'app-naac-form',
  templateUrl: './naac-form.component.html',
  styleUrls: ['./naac-form.component.css']
})
export class NaacFormComponent implements OnInit {
  facultyDept:any;
  naacTemplateId:any;
  naacDatas:any;
  formData:any;
  naacs:any;
  facultyId:any;
  requiredFiles:any;
  dateFields:any;
  criteria:any;
  testData:SafeHtml;
  constructor( 
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private naacService :NaacService,
    private fileValidateService : FileValidationService,
    private toastr: ToastrService,
    private loadingService :LoadingAlertService,
    private datepipe: DatePipe,
    private sanitizer: DomSanitizer) {
      this.facultyId = this.activatedRoute.snapshot.paramMap.get("facultyId");
      this.facultyDept = this.activatedRoute.snapshot.paramMap.get("facultyDeptId");
      this.naacTemplateId = this.activatedRoute.snapshot.paramMap.get("naacTemplateId");
      this.criteria = this.activatedRoute.snapshot.paramMap.get("criteria");
      this.naacs= {};
      this.naacDatas ={};    
      this.formData={};
      this.testData=[];
      this.getForm();
     }
  ngOnInit(): void { }

getForm(){
  this.loadingService.showLoading();
  this.naacService.getForm(this.naacTemplateId).then((data:any)=>{
      this.naacs = data;
      if(this.naacs != undefined){
        this.setRequiredFiles();
        this.setNaacDateField();
      }
      var i=0;
    for (let key in this.naacs.fields) {
      i++;
if(this.naacs.fields[key]["helptext"] != undefined){
 this.testData[i]=this.naacs.fields[key]["helptext"];
}
    }
      this.loadingService.hideLoading();
  });
}
create(valid){
  if(valid){
    this.formData.jsonVersion = this.naacs.fields.jsonVersion.value; 
    this.naacDatas.facultyDeptId = this.facultyDept;
    this.naacDatas.naacTemplateId = this.naacTemplateId;
    this.naacDatas.status = "WAITING";
    this.naacDatas.fields = this.formData;
    this.loadingService.showLoading();
    for(var i=0;i<this.requiredFiles.length;i++){
      if(this.naacDatas.fields[this.requiredFiles[i]]==undefined){
        this.toastr.error(this.naacs.fields[this.requiredFiles[i]]["label"]  +"  "+"required");
        this.loadingService.hideLoading();
        return;
      }
    }
    for(var i=0;i<this.dateFields.length;i++){
      if(this.naacDatas.fields[this.dateFields[i]]!=undefined){
        this.naacDatas.fields[this.dateFields[i]] = this.datepipe.transform(this.naacDatas.fields[this.dateFields[i]], 'dd/MM/yyyy')
       
      }
    }
    this.naacService.submitForm(this.naacDatas).then((data:any)=>{
      this.loadingService.hideLoading();
      this.toastr.success("Created succesfully");
        this.router.navigate(['/naac/submitted',this.facultyDept,this.naacTemplateId,this.facultyId,this.criteria])
    });
  }

}
originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  return 0;
}
goBack(){
  this.router.navigate(['/naac/submitted',this.facultyDept,this.naacTemplateId,this.facultyId,this.criteria])
}

uploadFiles(fileData: FileList, fileId) {
    var file = fileData.item(0);
    let obj = {};
    if(file != undefined){
      var fileStatus = this.fileValidateService.validateNaacFile(file,this.naacs.fields[fileId]["regex"])
            if( fileStatus == "valid"){
              this.loadingService.showLoading();
      this.naacService.uploadAttachment(file).then((data: any) => {
            if(data.versionId != undefined && data.fileKey != undefined){
              obj["versionId"] = data.versionId;
              obj["fileKey"] = data.fileKey;
              this.formData[fileId] = obj;
              this.naacs.fields[fileId]["fileKey"] = data.fileKey;
              this.naacs.fields[fileId]["versionId"] = data.versionId;
              this.loadingService.hideLoading();
              this.toastr.success("File uploaded succesfully");
            }
      });
    }else{
      this.toastr.error(fileStatus)
    }
  }
}
removeFile(fileId) {
  for (let key in this.naacs.fieldValues) {
    if(key == fileId){
        this.naacs.fields[key]["fileKey"] = null;
        this.naacs.fields[key]["url"] = null;
        this.formData[key] = null;
    }
  }
}
setRequiredFiles(){
  this.requiredFiles = [];
  for (let key in this.naacs.fields) {
    if(this.naacs.fields[key]["type"] == "file" && this.naacs.fields[key]["required"] == "true"){
      this.requiredFiles.push(key);
    }
  }
}
setNaacDateField(){
  this.dateFields = [];
  for (let key in this.naacs.fields) {
    if(this.naacs.fields[key]["type"] == "date"){
      this.dateFields.push(key);
    }
  }
}
}
