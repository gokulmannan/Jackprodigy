import { Component, OnInit } from '@angular/core';
import { UserService } from 'projects/user/_service/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { CoursematerialService } from '../../_service/courseMaterial.service';

@Component({
  selector: 'app-student-course-material',
  templateUrl: './student-course-material.component.html',
  styleUrls: ['./student-course-material.component.css'],
  
})
export class StudentCourseMaterialComponent implements OnInit {
 
  subject:any;
  eachSubject:any='';
  subjectDetail:any;
  subjectName:any;
  currentUser:any;
  
  constructor(private coursematerialService:CoursematerialService,
    private loadingService:LoadingAlertService,
    private userService : UserService) { }

  ngOnInit() {
  
    this.eachSubject=null;
    this.subjectDetail = []
    this.getCurrentUser();
  }
  getCurrentUser(){
    this.userService.getCurrentUser().then((data:any)=>{
     this.currentUser = data;
     this.getSubjects(this.currentUser);
    });
  }

  getSubjects(currentUser) {
     this.loadingService.showLoading();
    this.coursematerialService.getSubject(currentUser).then((data:any) => {
      this.subject = data;
     this.loadingService.hideLoading();
    });
 }

 onSelect(eachSubject) {
  this.loadingService.showLoading();
    this.subjectName = eachSubject.subjectName;
    this.coursematerialService.getStudentSubjects(eachSubject.regSubId).then((data:any) =>{
      this.subjectDetail=data;
      this.loadingService.hideLoading();
    });
  }



}
