import { Component, OnInit } from '@angular/core';
import { StudentsubmissionService } from '../../../_services/studentsubmission.service';
import { StudentsubmissionProvider } from '../../../_provider/studentsubmission.provider';
import { Studentsubmission } from '../../../_models/studentsubmission';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { StudentViewAssignmentPopupComponent } from '../student-View-Assignment-Popup/student-View-Assignment-Popup.component';
import { StudentUploadPopUpComponent } from '../studentUpload-Pop-up/studentUpload-Pop-up.component';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-studentView',
  templateUrl: './studentView.component.html',
  styleUrls: ['./studentView.component.css']
})
export class StudentViewComponent implements OnInit {

  public studentSubmission: Studentsubmission[];
  assignmentId: any;

  constructor(private loadingService:LoadingAlertService,private studentsubmissionService: StudentsubmissionService, private studentsubmissionProvider: StudentsubmissionProvider, private config: NgbModalConfig, private modal: NgbModal) {
    config.backdrop = "static";
    config.keyboard = false
  }
  ngOnInit() {
    this.studentSubmission = [];
    this.getStudentsubmission()
  }
  getStudentsubmission() {
    this.loadingService.showLoading();
    this.studentsubmissionService.getAssignment().then((data: Studentsubmission[]) => {
      this.studentSubmission = data;
      this.loadingService.hideLoading();

    });
  }

  uploadPopup(studentSubmission) {

    const modalRef = this.modal.open(StudentUploadPopUpComponent, { size: 'lg' });
    modalRef.componentInstance.value = studentSubmission;
  }

  viewAssignment(eachStudentSubmission) {
    const modalRef = this.modal.open(StudentViewAssignmentPopupComponent);
    this.assignmentId = eachStudentSubmission.id;
    modalRef.componentInstance.value = eachStudentSubmission;
  }

}
