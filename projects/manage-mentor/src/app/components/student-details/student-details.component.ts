import { ToDateComponent } from './../to-date/to-date.component';
import { getTestBed } from '@angular/core/testing';
import { Department } from 'projects/department/_models/department';
import { DeleteMentorLogComponent } from './../delete-mentor-log/delete-mentor-log.component';
import { FromDateComponent } from './../from-date/from-date.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  closeResult = '';
  hodId: string;
  searchText: string;
  getStudents: any = [];
  studentIds: any = [];
  profileId: any;
  createDate: any;
  sendingDatas: any;
  selectdate: string;
  currentdate: string;
  currentDateLong: string;
  dateFormat: string;
  fromDate: any;
  ToDate: any;
  
  newDate: any;
  getDate: void;
  DepartmentsFaculty: any;
  previousPaging: any;
  departments: any;
  aang: any;
  de: string;
  mentorId: any;
  backId: string;
  bacDeptId: string;
  newId: string;
  newId2: string;
  getAllStudents: any;
  newstudentIds: any;
  check: boolean;
  currentUser: any;
  gettingCurrentUser: any;
  checks: boolean;
  newHodId: string;
  newBackdepId2: string;
  selectAll:any;
  dept: string;
  constructor(private ManageMentorService: manageMentorService
    , private activatedRoute: ActivatedRoute,
    private datepipe: DatePipe,
    private _location: Location,
    private router: Router,
    private loadingService: LoadingAlertService,
    private userService: UserService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {
    this.hodId = this.activatedRoute.snapshot.paramMap.get("staffId");
    this.dept = this.activatedRoute.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {

    this.getDepartments()
  
 this.getStudents={}
    this.getStudents[0]={};
    this.getStudents[0].students={} 
    this.fromDate = {};
    this.sendingDatas = {}
      this.getStaff();     
    this.selectAll={}
    this.getCurrentUser();
    this.currentUser={}
    }
  getCurrentUser(){
    this.userService.getCurrentUser().then((data:any)=>{
      this.currentUser = data;

    });
  }
  getStaff() {
    this.loadingService.showLoading();
    this.ManageMentorService.getStaff(this.hodId).then((data: any) => {
      this.getStudents = data;
      this.loadingService.hideLoading();
    });
  }
  profileDetails(list) {
    this.profileId = list.studentInfo.id;
    this.mentorId = this.getStudents[0].id;
    this.newHodId = this.hodId;
    this.newBackdepId2 = this.dept;
    this.router.navigate(['/manageMentor/profile', this.newBackdepId2, this.newHodId, this.profileId, this.mentorId])
  }
  getDepartments() {
    this.ManageMentorService.getDepartments().then((data: any) => {
      this.departments = data;
    });
  }
  // checkAll() {
  //   for (var i = 0; i < this.getStudents[0].students.length; i++) {
  //     this.getAllStudents = this.getStudents[0].students[i].studentInfo;
  //     this.newstudentIds = this.getAllStudents.id;
  //     let index = this.studentIds.indexOf(this.newstudentIds);
  //     if (index == -1) {
      
  //       this.checks=true;
  //       this.selectAll.checked=true;
  //       this.studentIds.push(this.newstudentIds);
  //     }
  //     else {
  //       this.checks=false;
  //       this.selectAll.checked=true;
  //       this.studentIds.splice(index, 1);
        
  //     }
  //   }
  // }
  onSelect() {
    this.ManageMentorService.getStudentsById(this.backId).then((data: any) => {
      this.DepartmentsFaculty = data;
    });
  }
  // checkAllCheckBox(checked, id) {
  //   let index = this.studentIds.indexOf(id);
  //   if (checked) {
  //     if (index == -1) {
      
  //       this.studentIds.push(id);
  //     }
  //   } else if (index != -1) {
      
  //     this.studentIds.splice(index, 1);
  //   }
    
  // }
  updateFromDate(getStudents) {
    const modalRef = this.modalService.open(FromDateComponent, { size: 'md' });
    modalRef.componentInstance.dateStudents = getStudents;
    modalRef.componentInstance.studentId = this.studentIds;
    modalRef.result.then(() => {
      this.selectAll.checked=false;
      this.checks=false;
      this.studentIds=[]
      this.getStaff()
    })
  }
  updateToDate(getStudents) {
    const modalRef = this.modalService.open(ToDateComponent, { size: 'md' });
    modalRef.componentInstance.dateStudents = getStudents;
    modalRef.componentInstance.studentId = this.studentIds;
    modalRef.result.then(() => {
      this.selectAll.checked=false;
      this.checks=false;
      this.studentIds=[]
      this.getStaff()
    })
  }
  deleteLog(getStudents) {
    if (this.studentIds == 0) {
      this.toastr.error("select any one student")
    }
    else {
      const modalRef = this.modalService.open(DeleteMentorLogComponent);
      modalRef.componentInstance.studentsId = this.studentIds;
      modalRef.componentInstance.deleteStudent1 = getStudents[0]
      modalRef.result.then(() => {
        this.selectAll.checked=false;
        this.checks=false;
        this.studentIds=[]
        this.redirect();
      })
    }
  }
  goBack() {
    this.router.navigate(['/manageMentor/home', this.dept]);
  }
  addDate(getStudents) {
    this.createDate = getStudents[0];
    if (this.studentIds.length != 0) {
      this.selectdate = new Date(this.fromDate.startDate).getTime().valueOf().toString();
      for (var i = 0; i < this.createDate.students.length; i++) {
        var students = this.studentIds.indexOf(this.createDate.students[i].studentId);
        if (students != -1) {
          this.createDate.students[i].startDate = this.selectdate;
        }
      }
    }
    this.ManageMentorService.addStudents(this.createDate).then((data: any) => {
      this.sendingDatas = data;
      this.redirect();
    });
  }

  redirect() {
    this.router.navigate(['/manageMentor/studentDetails',this.newHodId,this.newBackdepId2]);
  }

  selectSingleStudent(event, studentId) {
    if (event.target.checked) {
      if (this.studentIds.includes(studentId) == false) {
        this.studentIds.push(studentId);
      }
    } else {
      if (this.studentIds.includes(studentId) == true) {
        this.studentIds.splice(this.studentIds.indexOf(studentId),1);
      }
    }
    
  }



  selectAllCheckbox(event, students) {
    if (event.target.checked) {
      this.checks=true;
      this.selectAll.checked=true;
    
      this.studentIds= [];
      for (var i = 0; i < students.length; i++) {
          this.studentIds.push(students[i].studentId);
        }
    } else {
this.checks=false;
      this.selectAll.checked=false;
  
      this.studentIds=[]
    }
  }



}