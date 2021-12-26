import { Component, OnInit } from '@angular/core';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { StudentAnalyticsService } from '../../_services/studentAnalyticsService';

@Component({
  selector: 'app-faculty-analytics',
  templateUrl: './faculty-analytics.component.html',
  styleUrls: ['./faculty-analytics.component.css']
})
export class FacultyAnalyticsComponent implements OnInit {
  facultyReports: any[];
  getFaculties: any[];
  facId:any;
  showReport: boolean;
  gender: any;
  reportRadio:any="CONSOLIDATED";
  facultyId: any;
  allFacultyReports: any[];
  showAllReport: boolean;
  showRadio:boolean;
  constructor(private loadingService:LoadingAlertService,private studentAnalyticsService:StudentAnalyticsService) { }

  ngOnInit(): void {
this.getFaculty();
this.getReport("CONSOLIDATED");
  }

  getFaculty(){
    this.loadingService.showLoading();
    this.studentAnalyticsService.getFaculty().then((data:any[]) => {
      this.getFaculties=data;
    })
    this.loadingService.hideLoading();
  }
  getFacultyReports(id){
console.log(id);
this.facultyId=id;
this.loadingService.showLoading();
this.studentAnalyticsService.getFacultyReports(id).then((data:any[]) => {
  this.facultyReports=data;
  this.showRadio=true;
  this.showReport=true;
  this.gender=this.facultyReports["gender"];
})
this.loadingService.hideLoading();
  }

  getReport(value){
    console.log(value)
    if(value == 'CONSOLIDATED'){
      this.getFacultyReports(this.facultyId);
    }
    else{
      this.getAllReportsFaculty(this.facultyId);
    }
  }

  getAllReportsFaculty(id){
    this.loadingService.showLoading();
    this.facultyReports=[];
    this.studentAnalyticsService.getAllFacultyReports(id).then((data:any[]) => {
      this.allFacultyReports=data;
      this.showAllReport=true;
      this.showRadio=true;
      this.showReport=false;
    })
    this.loadingService.hideLoading();
  }

}
