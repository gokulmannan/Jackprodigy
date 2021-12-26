import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  @Input() Editdata: any;
  currentRate1 = 0;
  postComments: any;
  public createComments = {
    studentId: '',
    staffId: '',
    mentorId: '',
    commentDesc: '',
    rating: ''
  }

  constructor(config: NgbModalConfig,
    private ManageMentorService: manageMentorService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private fileValidator: FileValidationService,
    private loadingService: LoadingAlertService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Editdata
  }
  updateComment() {
    this.Editdata.studentid = this.createComments.studentId;
    this.Editdata.studentId = this.createComments.staffId;
    this.Editdata.studentId = this.createComments.mentorId;

    this.ManageMentorService.putComments(this.Editdata).then(() => {
      this.toastr.success("successfully Created");
      this.loadingService.showLoading();
      this.activeModal.close()
      this.loadingService.hideLoading();
    })

  }
  minRate() {
    this.Editdata.rating=this.currentRate1
    this.currentRate1 = 1;
  }
  midRate() {
    this.Editdata.rating=this.currentRate1
    this.currentRate1= 5;
  }
  maxRate() {
    this.Editdata.rating=this.currentRate1
    this.currentRate1 = 10;
  }
  
  activeModalDismiss() {
    this.activeModal.close()
  }
}