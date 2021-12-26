import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })

export class manageMentorProvider {
  token: string;
  currentUser: object;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token')
    this.currentUser = {};
    this.currentUser = this.cookieService.getObject("currentUser");

  }


  getDepartments() {
    return this.http.get(Common.URI + '/api/departments?token=' + this.token);

  }
  getDepartmentStudentsById(departmentid) {
    return this.http.get<any>(Common.URI + '/api/mentor?filter=departmentid eq ' + departmentid + '&token=' + this.token);

  }
  getStaff(staffId) {
 
    return this.http.get(Common.URI + '/api/mentor/byStaff/' + staffId + '?token=' + this.token);
  }
  getUser(userId) {
    return this.http.get(Common.URI + '/api/user/' + userId + '?token=' + this.token);
  }
  getListAc(id) {
    return this.http.
      get(Common.URI + '/api/accyear?filter=departmentId eq ' + id + ',inactive eq NO &token=' + this.token);
  }
  getAccYear(id) {
    return this.http.get(Common.URI + '/api/group?filter=accYearId eq ' + id + ',type eq CURRENT &token=' + this.token);

  }
  getStudents(studentId) {
    return this.http.get(Common.URI + '/api/group/student/' + studentId + '?token=' + this.token);
  }
  AddStudents(data) {
    return this.http.put(Common.URI + '/api/mentor/' + data.id + '?token=' + this.token, data);
  }
  getComment(studentId) {
    return this.http.get(Common.URI + '/api/mentorComment?filter=studentId eq' + studentId + '&token=' + this.token);

  }
  PostingComment(data) {
    return this.http.post(Common.URI + '/api/mentorComment?token=' + this.token, data);
  }
  deleteComment(id) {
    return this.http.delete(Common.URI + '/api/mentorComment/' + id + '?token=' + this.token);
  }
  postStudent(data) { 
    return this.http.post(Common.URI + '/api/mentor?token=' + this.token, data);
  }
  putComment(data) {
    return this.http.put(Common.URI + '/api/mentorComment/' + data.id + '?token=' + this.token, data);
  }
  postMentorLog(data) {
    return this.http.post(Common.URI + '/api/mentorLog?token=' + this.token, data);
  }
} 