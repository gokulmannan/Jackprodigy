import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { AcademicAdminService } from '../../_service/academicAdminService';

@Component({
  selector: 'app-academic-admin-home',
  templateUrl: './academic-admin-home.component.html',
  styleUrls: ['./academic-admin-home.component.css']
})
export class AcademicAdminHomeComponent implements OnInit {
  getFile: File;
  fileLabel: string;
  status: any;
  showError: boolean;

  constructor(private academicAdminService:AcademicAdminService,
    private loadingService:LoadingAlertService,
    private toastr:ToastrService,
    private fileValidator:FileValidationService,
    private router:Router) { }

  ngOnInit(): void {
    this.getFile;
  }

uploadFiles(fileData: FileList                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ) {
  var file = fileData.item(0);
  this.getFile = file;
  if(this.getFile != undefined){
    if( this.fileValidator.validateXlsFile(this.getFile)){
    this.loadingService.showLoading();
      this.academicAdminService.uploadFile(this.getFile).then((data: any) => {
        this.status = data
        if(data == "SUCCESS"){
          this.toastr.success("Excel uploded successfully")
          this.router.navigate(['/academicadmin/home']);
          this.removeFile();
        }else{
          this.showError = true;
        }
        this.loadingService.hideLoading();
      });
     }
     else{
      this.toastr.error("Please Upload Xls File only");
      this.removeFile();
    }
  }else{
    this.toastr.error("Please select File")
  }
}

removeFile() {
  this.getFile = undefined;
  this.showError = false;
}


}
