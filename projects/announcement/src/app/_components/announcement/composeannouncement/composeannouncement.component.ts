import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertComponent } from 'src/app/common/components/loading-alert/loading-alert.component';
import { FileUploadService } from 'src/app/common/service/file-upload.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { SelectMembersService } from '../../../_services/selectMembers.service';

@Component({
  selector: 'app-composeannouncement',
  templateUrl: './composeannouncement.component.html',
  styleUrls: ['./composeannouncement.component.css']
})
export class ComposeannouncementComponent implements OnInit {
  showLabel: boolean;
  constructor(private router : Router,
              private fileUploadService : FileUploadService,
              private loadingService :LoadingAlertService,
              private SelectMembersService : SelectMembersService,
              private validator:FileValidationService,
              private toastr:ToastrService) { }
  announcementForm:any;
  showUploadButton:boolean=false;
  fileToUpload:any;
  ngOnInit() {
    this.announcementForm = {};
    this.announcementForm.file ={};
  }
  
  previewAnnoucement(valid){
    if(valid){
      this.setAnnouncementData(this.announcementForm);
          this.router.navigate(['/announcement/preview'])
    }
  }
  setAnnouncementData(value:any){
        this.SelectMembersService.announcementData = value;
  }
  change(fileData: FileList){
    this.fileToUpload = fileData.item(0);
    if(this.validator.validateAnnouncementFile(this.fileToUpload)){
    if(this.fileToUpload != undefined){
      this.showUploadButton = true;
      this.showLabel=false;
    }
  }
  else{
    this.showLabel = true;
    this.fileToUpload == undefined;
    this.announcementForm.file == undefined;
    this.toastr.error("File name not valid")
  }
  }
  uploadFiles(){
    if(this.fileToUpload != undefined){
      this.loadingService.showLoading();
      this.fileUploadService.uploadAttachment(this.fileToUpload).then((data:any)=>{
        var file = {};
        if(data != undefined){
          file["versionId"] = data.versionId;
          file["fileKey"] = data.fileKey;
          this.announcementForm.file = file;
        }
        this.loadingService.hideLoading();
      });
    }
  }
  removeFile(){
    this.announcementForm.file = {};
  }
}
