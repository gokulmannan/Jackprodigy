import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from '../../../_services/assignment.service';
import { SubjectPopupComponent } from '../subject-Popup/subject-Popup.component';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';

@Component({
  selector: 'app-editAssignment',
  templateUrl: './editAssignment.component.html',
  styleUrls: ['./editAssignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  @Input() value: any;
  public editedDetails: any;
  public subName: any;
  public assignmentData: any;
  public fileChanged: boolean = false;
  public fileLable = 'Choose file';
  public fileAttached: boolean = true;
  fileToUpload: File = null;
  public showBrowse: boolean = true;
  public file: any;

  date = {
    day: 0,
    month: 0,
    year: 0
  };
  constructor(public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private assignmentService: AssignmentService, 
    private datepipe: DatePipe, 
    private router: Router, 
    private toastr: ToastrService, 
    private fileValidate: FileValidationService,
     private loadingService: LoadingAlertService) { }
  ngOnInit() {

    this.subName = {};
    this.assignmentData = {};
    this.assignmentData.file = {};
    this.editedDetails = {};
    this.editedDetails.file = {};
     this.getAssignment();
   }

  getAssignment() {
      this.assignmentService.getAssignment(this.value.id).then((data: any) => {
      this.assignmentData = data;

    });
  }
  subjectPop() {
    const modalRef = this.modalService.open(SubjectPopupComponent, { size: "lg" });
    modalRef.result.then((subject) => {
      if (subject != undefined) {

        this.assignmentData.subjects = [subject.id];
        this.assignmentData.subjectName = subject.subjectName;

      }
    });
  }
  closeAlert() {

   this.assignmentData.subjectName = undefined;
    }

  handleFileInput(files: FileList) {
    this.fileAttached = true;
    this.fileToUpload = files.item(0);
    if( this.fileValidate.validate(this.fileToUpload) == true){
    
      this.fileLable = this.fileToUpload.name;
    
     }
     else{
       
       return this.fileToUpload=null
     }
  

  }

  uploadFile(): any {
    this.loadingService.showLoading();
    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    this.assignmentService.fileUpload(formData).then((data) => {
      this.loadingService.hideLoading();
      return data;
    });
    }



  update() {
      this.loadingService.showLoading();
      this.assignmentService.putAssignment(this.assignmentData).then((data: any) => {
      this.loadingService.hideLoading();
      this.toastr.success("Updated Successfully")
      this.activeModal.close("success");
    })
  }


  updateAssignment() {
    if (this.fileToUpload != undefined && this.assignmentData.file == undefined) {
      this.loadingService.showLoading();
    this.assignmentService.fileUpload(this.fileToUpload).then((data: any) => {
        if (data != undefined) {
          this.assignmentData.file = {};
          this.assignmentData.file.versionId = data.versionId;
          this.assignmentData.file.fileKey = data.fileKey;
        }
        this.update();
        this.activeModal.close()
       });
    }
    else if (this.fileToUpload == undefined && this.assignmentData.file != undefined) {
     this.update();
      }

    else if (this.fileToUpload != undefined && this.assignmentData.file != undefined) {
      this.assignmentService.fileChange(this.fileToUpload, this.assignmentData.file.versionId, this.assignmentData.file.fileKey).then((data: any) => {
        if (data != undefined) {
          this.assignmentData.file = {};
          this.assignmentData.file.versionId = data.versionId;
          this.assignmentData.file.fileKey = data.fileKey;
        }
        this.update();
      })
    }
    else if (this.fileToUpload == undefined && this.assignmentData.file == undefined) {
      this.update();
     }
  }

  removeFile() {
    this.showBrowse = false;
    this.fileAttached = false;
    this.fileLable = 'Choose file';
    this.fileChanged = true;
    }
}







