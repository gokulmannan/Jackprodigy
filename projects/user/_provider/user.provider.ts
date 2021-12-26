
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};

const TOKEN_KEY = 'token';
@Injectable({ providedIn: 'root' })
export class UserProvider {

  currentUser: any;
  token: any;
  constructor(private http: HttpClient,
    private cookieService: CookieService) {
    this.token = this.cookieService.get("token")
   
  }
  getCurrentUser() {
    return this.http.get(Common.URI + '/api/token/' + this.token + '?token=' + this.token);
  }
  getSingleUser() {
    return this.http.get(Common.URI + '/api/user/singleUser?token=' + this.token);
  }
  getFilteredStaff(facultyDept, staffType) {
    return this.http.get(Common.URI + '/api/user?filter=usertype eq FACULTY,facultyDeptId eq ' + facultyDept.id + ',staffTypeId eq' + staffType.id + '&fields=id&fields=name&fields=email&fields=phone&fields=facultyDeptId&fields=staffTypeId&token=' + this.token);
  }

  getStaffByFacultyDept(facultyDeptId) {
    return this.http.get(Common.URI + '/api/user?filter=facultyDeptId eq ' + facultyDeptId + '&token=' + this.token);
  }

  getAllStaff(){
    return this.http.get(Common.URI + '/api/user?filter=usertype eq FACULTY&count=100000&token=' + this.token);
  }

}