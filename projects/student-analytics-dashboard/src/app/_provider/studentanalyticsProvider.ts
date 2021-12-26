import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Common } from 'src/app/common';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
  
    })
  };
  @Injectable({ providedIn: 'root' })
  
  export class StudentAnalyticsProvider {
  
    currentUser: any;
    token:any;
    constructor(private http: HttpClient,  private cookieService:CookieService) {
      this.token = this.cookieService.get('token');
      this.currentUser ={};
      this.currentUser  = this.cookieService.getObject("currentUser");
    }


    getFacultys(){
        return this.http.get(Common.URI + '/api/faculty/get?token=' + this.token);
      }
      getFacultyReports(id){
          console.log(id)
        return this.http.get(Common.URI + '/api/dashboard/student-analytics/get/'+id+'?token=' + this.token);
      }
      getAllFacultyReports(id){
        console.log(id)
      return this.http.get(Common.URI + '/api/dashboard/student-analytics/getAll/'+id+'?token=' + this.token);
    }


}