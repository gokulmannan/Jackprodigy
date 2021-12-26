import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoursematerialService } from '../../_service/courseMaterial.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { UserService } from 'projects/user/_service/user.service';


@Component({
  selector: 'app-createCourseMaterial',
  templateUrl: './createCourseMaterial.component.html',
  styleUrls: ['./createCourseMaterial.component.css']
})
export class CreateCourseMaterialComponent implements OnInit {
  currentUser:any;
  constructor(config: NgbModalConfig ,
    private coursematerialService: CoursematerialService,
     public activeModal: NgbActiveModal, 
     private toastr:ToastrService,
     private fileValidator:FileValidationService,
     private loadingService : LoadingAlertService,
     private userService :UserService) {
    config.backdrop = 'static';
    config.keyboard = false;

   }
  @Input() data: any;
  @Input() mySubject:boolean;
  public subjects: any = [];
  public fileName: any = [];
  public fileLable = 'Choose file';
  public fileAttached: boolean = false;
  fileToUpload: File =null;
  public enebleUpdateButton: boolean = false;
  public fileChanged: boolean = false;
  public showBrowse: boolean = true;
  public courseMaterial = {
    title: '',
    subjectId: '',
    courseMaterialType: '',
    description: ''
  }
  types:any[]=['ImportantQuestions','QuestionBank','Syllabus','References','Notes','Other'];


  eachSubject:any='';

  ngOnInit() {
    
    this.eachSubject=-1;
  
    if (this.data != null) {
     
      this.enebleUpdateButton = true;
      this.fileAttached = true;
      this.courseMaterial.title = this.data.title;
      this.courseMaterial.subjectId = this.data.subjectId;
      this.courseMaterial.courseMaterialType = this.data.courseMaterialType;
      this.courseMaterial.description = this.data.description;
     
      this.fileLable = this.data.file.fileKey;
  
    }
    this.loadingService.showLoading();
      this.userService.getCurrentUser().then((data:any)=>{
       this.currentUser = data;
       this.coursematerialService.getCurrentUserSubjects(this.currentUser).then((data1: any) => {
        this.subjects = data1;
        this.loadingService.hideLoading();
      });
      });
    
  }
  handleFileInput(files: FileList) {
    this.fileAttached = true;
    this.fileToUpload = files.item(0);
    if( this.fileValidator.validate(this.fileToUpload)){

      this.fileLable = this.fileToUpload.name;
    
     }
     else{
      this.fileAttached = false;
     
        this.fileToUpload = null;
     }
 
  }
  createMaterial() {
    this.loadingService.showLoading();
   this.coursematerialService.create(this.fileToUpload, this.courseMaterial).then(() => {
       this.toastr.success("successfully Created");
       this.loadingService.hideLoading();
       this.activeModal.close()
    })

   }
 

  updateCourseMaterials() {
   
    if (this.fileChanged == false) {
   
      this.updateCourseMaterialsWithoutFileChange();
    }
    else{
 
      this.updateCourseMaterialsWithFileChange();
    }
  }
  updateCourseMaterialsWithoutFileChange() {
    this.loadingService.showLoading();
    this.fileToUpload = undefined;
   this.coursematerialService.updateCourseMaterialsWithoutFileChange(this.fileToUpload, this.courseMaterial, this.data.id).then(() => {
      this.toastr.success("Updated Successfully");
      this.loadingService.hideLoading();
      this.activeModal.close()
   })

  }
  updateCourseMaterialsWithFileChange() {
    this.loadingService.showLoading();
   this.coursematerialService.updateCourseMaterialsWithFileChange(this.fileToUpload, this.courseMaterial, this.data.id).then(() => {
       this.toastr.success("Updated Successfully");
      this.activeModal.close()
      this.loadingService.hideLoading();
   })

  }
  
  removeFile() {
  this.showBrowse = false;
  this.fileAttached = false;
  this.fileLable = 'Choose file';
  this.fileChanged = true;
}

close(){
  this.activeModal.close()
}
}
