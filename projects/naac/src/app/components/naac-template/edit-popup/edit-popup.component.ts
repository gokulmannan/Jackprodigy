import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 
@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {
  @Input() naacTemplateId:any;
  naacData:any;
  jsonFile:any;
  criterias: string[];
  types: any;
  constructor(private naacService :NaacService,
      public activeModal: NgbActiveModal,
      private toastr: ToastrService,
      private loadingService :LoadingAlertService) {
    

   }

  ngOnInit(): void {
    this.naacData ={};
    this.jsonFile ={};
    this.getNaacTemplate();
    this.criterias=["1","2","3","4","5","6"];
    this.types = ['GENERAL','MEDICAL'];
  }

getNaacTemplate(){
  console.log(this.naacTemplateId)
  this.loadingService.showLoading();
  this.naacService.getTemplateById(this.naacTemplateId).then((data:any)=>{
    this.naacData = data;
    if(this.naacData.jsonFile != undefined){
      this.jsonFile = this.naacData.jsonFile;
    }
    this.loadingService.hideLoading();
  })
}

update(valid){
  if(valid){
    this.naacData.jsonFile = this.jsonFile;
    if(this.jsonFile.fileKey != undefined){
      this.loadingService.showLoading();
    this.naacService.updateTemplate(this.naacData).then((data:any)=>{
      this.loadingService.hideLoading();
      this.toastr.success("Template updated successfully");
    });
    this.activeModal.close();
  }else{
    this.toastr.error("Please select File !")
  }
  }
        
}
uploadFiles(fileData: FileList                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ) {
  var file = fileData.item(0);
  if(file != undefined){

    if(this.jsonFile.fileKey == undefined){
      this.loadingService.showLoading();
      this.naacService.uploadAttachment(file).then((data: any) => {
          this.setFileData(data);
      });
    }else{
      this.loadingService.showLoading();
      this.naacService.putAttachment(file,this.jsonFile.versionId,this.jsonFile.fileKey).then((data: any) => {
        this.setFileData(data);
      });
    }
  }else{
    this.toastr.error("Please select File")
  }
}
setFileData(data){
  let obj = {};
  if(data.versionId != undefined && data.fileKey != undefined){
    this.jsonFile.versionId = data.versionId;
    this.jsonFile.fileKey = data.fileKey;
    this.loadingService.hideLoading();
    this.toastr.success("File uploaded succesfully");
  }
}
removeFile() {
    this.jsonFile.fileKey = undefined
}
}