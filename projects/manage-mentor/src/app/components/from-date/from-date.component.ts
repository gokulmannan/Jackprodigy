import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'projects/user/_service/user.service';
import { FileValidationService } from 'src/app/common/service/file-validation.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-from-date',
  templateUrl: './from-date.component.html',
  styleUrls: ['./from-date.component.css']
})
export class FromDateComponent implements OnInit {
  @Input() dateStudents: any;
  @Input() studentId: any;
  createDate: any;
  endDate: any;
  selectdate: string;
  sendingDatas: any;
  showDiv: boolean;
  constructor(config: NgbModalConfig,
    private ManageMentorService: manageMentorService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private fileValidator: FileValidationService,
    private loadingService: LoadingAlertService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.endDate = {}
    this.dateStudents
    this.studentId
    this.sendingDatas = {}
  }
  updateDate(dataStudents) {
    if (this.studentId == 0) {
      this.showDiv = true;
    }
    this.createDate = this.dateStudents[0];
    if (this.studentId.length != 0) {    
      this.selectdate = new Date(this.endDate.endDate).getTime().valueOf().toString();
      for (var i = 0; i < this.createDate.students.length; i++) {
        var students = this.studentId.indexOf(this.createDate.students[i].studentId);
        if (students != -1) {
          this.createDate.students[i].endDate = this.selectdate;
        }
      }
      this.ManageMentorService.addStudents(this.createDate).then((data: any) => {
        this.loadingService.showLoading();
        this.sendingDatas = data;
        this.toastr.success("sucessfully added")
        this.activeModal.close();
        this.loadingService.hideLoading();
      });
    }
  }
}
