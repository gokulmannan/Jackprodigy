import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
 
@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.css']
})
export class CreatePopupComponent implements OnInit {
save:any;
jsonFile:any;
  criterias: any;
  types: any;
  constructor(private naacService : NaacService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private loadingService :LoadingAlertService) { }

  ngOnInit(): void {
    this.save={};
    this.jsonFile = {};
    this.criterias=["1","2","3","4","5","6","7"];
    this.types = ['GENERAL','MEDICAL'];
  }
create(valid){
  if(valid){
    if( this.jsonFile.fileKey != undefined){
      this.save.jsonFile = this.jsonFile;
      this.loadingService.showLoading();
    this.naacService.createTemplate(this.save).then((data:any)=>{
      this.loadingService.hideLoading();
      this.toastr.success("Template created succesfully");
    });
    this.activeModal.close("success");
  }else{
    this.toastr.error("Please select File")
  }
  }
}
uploadFiles(fileData: FileList                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ) {
  var file = fileData.item(0);
  if(file != undefined){
    this.loadingService.showLoading();
      this.naacService.uploadAttachment(file).then((data: any) => {
          this.setFileData(data);
      });
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
