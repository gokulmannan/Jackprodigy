
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie';
import { Common } from 'src/app/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class AcademicAdminProvider {
    token: string;
    currentUser: {};



    constructor(private http: HttpClient, 
        private cookieService:CookieService) {
       this.token = this.cookieService.get('token')
       this.currentUser ={};
       this.currentUser  = this.cookieService.getObject("currentUser");
     }
  uploadFile(data) {
    return this.http.post(Common.URI + '/api/student/feesDueStudents?token=' + this.token,data);
  }

}