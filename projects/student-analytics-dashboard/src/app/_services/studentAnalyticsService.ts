import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentAnalyticsProvider } from '../_provider/studentanalyticsProvider';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
  
    })
  };
  @Injectable({ providedIn: 'root' })
  export class StudentAnalyticsService {
  createData:any;
  
     constructor(private studentAnalyticsProvider: StudentAnalyticsProvider ,private toastr:ToastrService) {
  
     }

     getFaculty() {
        return new Promise((resolve, reject) => {
          this.studentAnalyticsProvider.getFacultys().subscribe(
            (data: any) => {
    
              resolve(data);
            },
            error => console.log("Error :: " + error)
          )
        });
      }

      getFacultyReports(id) {
        return new Promise((resolve, reject) => {
          this.studentAnalyticsProvider.getFacultyReports(id).subscribe(
            (data: any) => {
    
              resolve(data);
            },
            error => console.log("Error :: " + error)
          )
        });
      }

      getAllFacultyReports(id) {
        return new Promise((resolve, reject) => {
          this.studentAnalyticsProvider.getAllFacultyReports(id).subscribe(
            (data: any) => {
    
              resolve(data);
            },
            error => console.log("Error :: " + error)
          )
        });
      }


    }