import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NgbModal, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Assignment } from '../../../_models/assignment';
import { AssignmentService } from '../../../_services/assignment.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { SubjectPopupComponent } from '../subject-Popup/subject-Popup.component';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';


@Component({
  selector: 'app-composeAssignment',
  templateUrl: './composeAssignment.component.html',
  styleUrls: ['./composeAssignment.component.css'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class ComposeAssignmentComponent implements OnInit {

  @Input() data: any;
  public subjectdata: any = [];
  public subjectId: Assignment;
  public subName: any;
  public file: any = [];
  save: any;
  public fileData: any;
  public fileAttached: boolean = true;
  public fileLable = 'Choose file';
  fileToUpload: File = null;
  public fileChanged: boolean = false;
  selectdate: string;
  currentdate: string;
  currentDateLong: string;
  dateFormat: string;
  invalidDate: Boolean = false;
  public assignment = {
    title: '',
    message: '',
    subjects: '',
    subjectName: '',
    file: '',
    deadLine: '',
    submission: ''
  }
  constructor(private assignmentService: AssignmentService, 
    public modalService: NgbModal, 
    private datepipe: DatePipe, 
    public formBuilder: FormBuilder, 
    public toastr: ToastrService, 
    private fileValidate: FileValidationService, 
    private loadingService: LoadingAlertService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.save = {};
    this.save.file = {};
    this.fileData = {};
    this.subName = {};
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
      return data;
    });
  }
  sendAssignment() {
    this.loadingService.showLoading();
    this.selectdate = new Date(this.save.deadLine).getTime().valueOf().toString();
    this.currentdate = new Date().getTime().valueOf().toString();
    this.currentDateLong = this.datepipe.transform(this.currentdate, 'dd-MMM-yyyy');
    this.dateFormat = this.datepipe.transform(this.selectdate, 'dd-MMM-yyyy');
    if (this.selectdate >= this.currentdate) {
      this.save.subjects = this.subjectId;
      this.save.subjectName = this.subName;
      this.save.deadLine = this.dateFormat;
      this.loadingService.showLoading();
      this.assignmentService.create(this.save).then((data: any) => {
        this.assignment = data;
        this.loadingService.hideLoading();
        this.toastr.success("Successfully Created");
        this.redirect();

      });
    }

    else {
      this.invalidDate = true;
    }
  }

  redirect() {
    this.router.navigate(['/assignment'], { relativeTo: this.route });
  }

  create() {
    if (this.fileToUpload != undefined) {
      this.loadingService.showLoading();
      this.assignmentService.fileUpload(this.fileToUpload).then((data: any) => {
        this.save.file.versionId = data.versionId;
        this.save.file.fileKey = data.fileKey;
        this.sendAssignment();
      });
    }
    else {
      this.sendAssignment();
    }
  }
  removeFile() {
    this.fileAttached = false;
    this.fileLable = 'Choose file';
    if (this.data != null) {
      this.fileChanged = true;
    }
  }

  subjectPop() {
    const modalRef = this.modalService.open(SubjectPopupComponent, { size: "lg" });
    modalRef.result.then((result) => {
      if (result) {
        this.subjectdata = result;
        this.subjectId = result.id;
        this.subName = result.subjectName;
      }
    });
  }

  closeAlert() {
    this.subName = undefined;
  }

}
