
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coursematerial } from '../_models/courseMaterial';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';
import { UserService } from 'projects/user/_service/user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })

export class CoursematerialProvider {

  coursematerial: Coursematerial[];
  currentUser: any;
  token: any;
  constructor(private http: HttpClient, 
              private cookieService: CookieService,
              private userService : UserService) {
    this.token = this.cookieService.get('token')
  }
  
  getCourseMaterial(currentUser) {
    return this.http.get(Common.URI + '/api/courseMaterial/staff?in=stafflist.staffid eq' + currentUser.userId + ' &order=dec&sort=subjectId&token=' + this.token);

  }
  getCurrentUserSubjects(currentUser) {
    return this.http.get(Common.URI + '/api/subject/staffRegSub?in=stafflist.staffid eq ' + currentUser.userId + ' &order=dec&sort=subjectId&token=' + this.token);
  }
  postFile(formData, courseMaterial) {
 
    return this.http.post(Common.URI + `/api/courseMaterial?title=` +
      courseMaterial.title + `&subjectId=` + courseMaterial.subjectId +
      `&courseMaterialType=` + courseMaterial.courseMaterialType +
      `&description=` + courseMaterial.description + `&token=` + this.token, formData);

  }

  deleteCourseMaterial(id) {
    return this.http.delete(Common.URI + '/api/courseMaterial/' + id + '?token=' + this.token);
  }

  updateCourseMaterialsWithoutFileChange(fileToUpload: File, courseMaterial, id) {
    const endpoint = Common.URI + `/api/courseMaterial/update/` + id + `?title=` + courseMaterial.title + `&subjectId=` + courseMaterial.subjectId + `&courseMaterialType=` + courseMaterial.courseMaterialType + `&description=` + courseMaterial.description + `&token=` + this.token;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.put(endpoint, formData);
  }

  updateCourseMaterialsWithFileChange(fileToUpload: File, courseMaterial, id) {
    const endpoint = Common.URI + `/api/courseMaterial/update/` + id + `?title=` + courseMaterial.title + `&subjectId=` + courseMaterial.subjectId + `&courseMaterialType=` + courseMaterial.courseMaterialType + `&description=` + courseMaterial.description + `&token=` + this.token;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.put(endpoint, formData);
  }
  getStaffCourseMaterials(id) {
    return this.http.get(Common.URI + '/api/courseMaterial?filter=subjectId eq ' + id + '&token=' + this.token);
  }

  getStudentSubject(currentUser) {
    return this.http.get(Common.URI + '/api/subject/student/' + currentUser.userId + '?token=' + this.token);

  }

  getStudentSubjectsData(id) {
    return this.http.get(Common.URI + '/api/courseMaterial?filter=subjectId eq  ' + id + ' &sort=subjectId&order=dec&operation=W&token=' + this.token);
  }
}