import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';
import { DeleteMentorLogComponent } from '../delete-mentor-log/delete-mentor-log.component';
import { FromDateComponent } from '../from-date/from-date.component';
import { ToDateComponent } from '../to-date/to-date.component';

@Component({
  selector: 'app-mystudents',
  templateUrl: './mystudents.component.html',
  styleUrls: ['./mystudents.component.css']
})
export class MystudentsComponent implements OnInit {
  hodId: any;
  getStudents: any;
  currentUser: any;
  departments: any;



  searchText: string;
  studentIds: any = [];
  profileId: any;
  createDate: any;
  sendingDatas: any;
  selectdate: string;
  currentdate: string;
  dept: any;
  newDate: any;
  DepartmentsFaculty: any;
  mentorId: any;
  backId: string;
  bacDeptId: string;
  newId: string;
  newId2: string;
  getAllStudents: any;
  newstudentIds: any;
  check: boolean;
  
  gettingCurrentUser: any;
  checks: boolean;
  newHodId: string;
  newBackdepId2: string;
  noData: boolean;
  selectAll: any;


  constructor(private ManageMentorService: manageMentorService
    , private activatedRoute: ActivatedRoute,
    private cookieService : CookieService,
    private router: Router,
  private loadingService: LoadingAlertService,
    private userService: UserService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private toastr: ToastrService) {
      this.hodId = this.activatedRoute.snapshot.paramMap.get("staffId");
      this.bacDeptId = this.activatedRoute.snapshot.paramMap.get("id");
   
     }

  ngOnInit(): void {
  
  this.getCurrentuser()
  this.getStudents = {};
  this.getStudents[0]={};
  this.getStudents[0].students={};
this.noData=true;
this.selectAll={}
  
  this.currentUser ={};
  }
  


  getCurrentuser(){
    this.loadingService.showLoading();
    this.userService.getCurrentUser().then((data:any)=>{
         this.currentUser = data;
        // this.cookieService.putObject("currentUser",this.currentUser);
        this.ManageMentorService.getStaff(this.currentUser.userId).then((data: any) => {
          this.getStudents = data;
          // this.noData=true; 
          this.loadingService.hideLoading();
        });
         this.loadingService.hideLoading();

        });
  }

  getStaff(id) {
    this.loadingService.showLoading();
    
  }

  profileDetails(list) {
    this.profileId = list.studentInfo.id;
    this.mentorId = this.getStudents[0].id;
    this.newHodId = this.hodId;
    this.newBackdepId2 = this.bacDeptId;
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
      
      this.getCurrentuser()
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
      this.getCurrentuser()
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
        this.getCurrentuser();
      })
    }
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
        console.log(this.studentIds);
    } else {
this.checks=false;
      this.selectAll.checked=false;
  
      this.studentIds=[]
    }
  }








}
