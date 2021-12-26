
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Studentsubmission } from '../_models/studentsubmission';
import { Common } from 'src/app/common';
import { Assignment } from '../_models/assignment';
import { CookieService } from 'ngx-cookie';
import { UserService } from 'projects/user/_service/user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })

export class StudentsubmissionProvider {

  studentsubmission: Studentsubmission[];
   currentUser: any;
  token:any;
  public assignment: Assignment[];

  constructor(private http: HttpClient,
              private cookieService:CookieService,
    ) {
   this.token = this.cookieService.get('token')

  }
 
  getAssignment(id) {

    return this.http.get(Common.URI + '/api/assignment/view?token=' + this.token);

  }

  getSubmissionById(assignmentId) {

    return this.http.get(Common.URI + '/api/assignment/getsingleassignment/' + assignmentId + '?token=' + this.token);
  }

  saveAssignment(studentsubmission) {


    return this.http.post(Common.URI + '/api/assignment/studentSubmission?token=' + this.token, studentsubmission);
  }
  fileUpload(formData) {


    return this.http.post(Common.URI + '/api/announcement/fileValidation?token=' + this.token, formData);
  }

  deleteFile(assignmentId) {

    return this.http.delete(Common.URI + '/api/assignment/updatestudentSubmission/' + assignmentId + '?token=' + this.token);
  }
  getStudentAssignment(assignmentId) {

    return this.http.get(Common.URI + '/api/assignment/getassignment/' + assignmentId + '?token=' + this.token);
  }
}