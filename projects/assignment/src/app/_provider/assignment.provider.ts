import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Assignment } from '../_models/assignment'
import { Common } from '../../../../../src/app/common'
import { CookieService } from 'ngx-cookie';
import { UserService } from 'projects/user/_service/user.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class AssignmentProvider {
  assignment: Assignment[];
  currentUser: any;
  token: any;


  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private userService : UserService
  ) {
    this.token = this.cookieService.get('token')

  }

 
  getAssignmentById(currentUser) {

    return this.http.get(Common.URI + '/api/assignment/sent?filter=createdBy eq ' + currentUser.userId + '&token=' + this.token);
  }

  saveDetails(assignment) {

    return this.http.post(Common.URI + '/api/assignment/send/?token=' + this.token, assignment);
  }
  fileUpload(formData) {

    return this.http.post(Common.URI + '/api/announcement/fileValidation?token=' + this.token, formData);
  }
  subject(currentUser) {

    return this.http.get(Common.URI + '/api/subject/staffHandleSub/?in=stafflist.staffid eq' + currentUser.userId + '&filter =subjectStatus eq ACTIVE&token=' + this.token);
  }
  getAssignment(id) {

    return this.http.get(Common.URI + '/api/assignment/' + id + '?token=' + this.token);
  }
  putAssignment(data) {

    return this.http.put(Common.URI + `/api/assignment/update?token=` + this.token, data);
  }

  deleteFile(versionId, fileKey) {

    return this.http.delete(Common.URI + `/api/s3/deleteInJackprodigy?versionId=` + versionId + `&fileKey=` + fileKey + `&token=` + this.token);
  }

  fileChange(formData, versionId, filekey) {
    return this.http.put(Common.URI + '/api/s3/updateInJackprodigy/' + versionId + '/' + filekey + '?token=' + this.token, formData);
  }


}