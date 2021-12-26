import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentsubmissionService } from '../../../_services/studentsubmission.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
@Component({
  selector: 'app-studentUpload-Pop-up',
  templateUrl: './studentUpload-Pop-up.component.html',
  styleUrls: ['./studentUpload-Pop-up.component.css']
})
export class StudentUploadPopUpComponent implements OnInit {
  @Input() value: any;
  public fileAttached: any;
  public fileToUpload: any;
  public fileValidate: any;
  public fileLable: any;
  public fileSubmitted: any;
  public studentAssignment: any;
  public saveSubmission: any;
  public showBrowse: boolean = true;
  public fileChanged: boolean = false;
  fileData: any;
  currentdate: any;
  dateFormat: any;
  deadlineDate: any;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private datepipe: DatePipe, 
    public activeModal: NgbActiveModal, 
    public fileSubmission: StudentsubmissionService, 
    private toastr: ToastrService, 
    private loadingService: LoadingAlertService, 
    private fileValidator: FileValidationService) { }

  ngOnInit(): void {
    this.getStudentId();
    this.fileSubmitted = {}
    this.studentAssignment = {};
    this.fileSubmitted.studentFile = {};
    this.dateFormat = {}
    this.dateFormat.format = {}



  }

  getStudentId() {
    this.loadingService.showLoading();
    this.fileSubmission.studentSubmission(this.value.id).then((data: any[]) => {

      if (data.length != 0) {
        this.studentAssignment = data[0];

      }
    });
  }

  handleFileInput(files: FileList) {

    this.fileAttached = true;
    this.fileToUpload = files.item(0);
    if (this.fileValidator.validate(this.fileToUpload) == true) {

      this.fileLable = this.fileToUpload.name;

    }
    else {

      return this.fileToUpload = null
    }
  }

  uploadFile(): any {
    this.loadingService.showLoading();
    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    this.fileSubmission.fileUpload(formData).then((data) => {
      return data;

    });
  }
  submitFile() {
    this.loadingService.showLoading();
    this.fileSubmission.fileUpload(this.fileToUpload).then((data: any) => {
      this.fileData = data;
      this.postFile();
    });
  }

  postFile() {
    this.loadingService.showLoading();
    this.dateFormat = this.datepipe.transform(this.value.deadLine, 'yyyy/MM/dd');
    var year = new Date(this.dateFormat).getFullYear() - 1;
    var month = new Date(this.dateFormat).getMonth();
    var day = new Date(this.dateFormat).getDate();
    this.deadlineDate = this.datepipe.transform(new Date(year, month, day), "yyyy-MM-dd");

    this.deadlineDate = new Date(this.deadlineDate).getTime();
    this.currentdate = new Date().getTime();

    if (this.currentdate < this.deadlineDate) {

      this.fileSubmitted.assignmentId = this.value.id;
      this.fileSubmitted.studentFile.fileKey = this.fileData.fileKey;
      this.fileSubmitted.studentFile.versionId = this.fileData.versionId;

      this.fileSubmission.save(this.fileSubmitted).then((data: any) => {
        this.loadingService.hideLoading();
        this.saveSubmission = data;
        this.activeModal.close();
        this.toastr.success("Successfully Created");
      });
    }
    else {

      this.toastr.error("Deadline over");
      this.activeModal.close();
      this.loadingService.hideLoading();
      this.router.navigate(['/assignment/studentView']);
    }
  }

  remove() {
    this.showBrowse = false;
    this.loadingService.showLoading();
    this.fileSubmission.deleteFile(this.value.id).then((data: any) => {
      this.loadingService.hideLoading();
      this.toastr.success("Deleted Successfully");
      this.getStudentId()
    })
    this.fileAttached = false;
    this.fileLable = 'Choose file';
    this.fileChanged = true;

  }
}