import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';

import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() staffId: any;
  @Input() mentorId: any;
  @Input() profileId: any;
  
  currentRate = 5;
  MinRate=3;                            
  postComments:any;
  public createComments = {
    studentId:'',
  staffId:'',
    mentorId:'',
    commentDesc: '', 
    rating: ''
  }
  constructor(config: NgbModalConfig ,
    private ManageMentorService: manageMentorService,
     public activeModal: NgbActiveModal, 
     private toastr:ToastrService,
     private fileValidator:FileValidationService,
     private loadingService : LoadingAlertService,
     private route: ActivatedRoute,
     private cdref: ChangeDetectorRef
     ) {      

      config.backdrop = 'static';
      config.keyboard = false;
    }

  ngOnInit(): void {
    this.staffId
    this.mentorId
    this.profileId
    this.currentRate
  }
addComment(){ 
  this.createComments.studentId=this.profileId;
  this.createComments.staffId=this.staffId;
  this.createComments.mentorId=this.mentorId;
       this.ManageMentorService.postingComment(this.createComments).then(() =>  {
          this.toastr.success("successfully Created");
          this.loadingService.showLoading();
          this.activeModal.close()
          this.loadingService.hideLoading();
       })
}
minRate(){
  this.currentRate=1;
}
maxRate(){
  this.currentRate=10;
}
midRate(){
  this.currentRate=5;
}
activeModaldismiss(){
  this.activeModal.close()
}
}