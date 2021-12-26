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
  
  export class manageDepartmentProvider {
  
    currentUser: any;
    token:any;
    constructor(private http: HttpClient,  private cookieService:CookieService) {
      this.token = this.cookieService.get('token');
      this.currentUser ={};
      this.currentUser  = this.cookieService.getObject("currentUser");
    }
  
    getDepartments() {
      return this.http.get(Common.URI + '/api/departments?token=' + this.token);
  
    }
    
    getUsers(id) {
    return this.http.get(Common.URI + '/api/user?in=departmentid eq '+ id + '&filter=usertype eq' + "HOD" + '&token=' + this.token);

  }

  getFaculty() {
    return this.http.get(Common.URI + '/api/facultydepartment/getAllFacultyDepartments?token=' + this.token);

  }

  getFacultys(){
    return this.http.get(Common.URI + '/api/faculty/get?token=' + this.token);

  }

  getFacultyDepartment(id){
    return this.http.get(Common.URI + '/api/facultydepartment/get?filter=facultyId eq' + id + '&token=' + this.token)
  }

  getFacDepartment(){
    return this.http.get(Common.URI + '/api/facultydepartment/getAllFacultyDepartments?token=' + this.token)
  }
  createDepartment(data){
    return this.http.post(Common.URI + '/api/departments/create?token=' + this.token,data);
  }
  updateDepartment(data){
    return this.http.put(Common.URI + '/api/departments/'+ data.id +'?token=' + this.token,data);
  }
  deleteDepartment(id) {
    return this.http.delete(Common.URI + '/api/departments/delete/' + id + '?token=' + this.token);
  }

  getStaff(id) {
    return this.http.get(Common.URI + '/api/user?filter=facultyDeptId eq '+ id + '&token=' + this.token);
  }

  updateAssignStaff(data){
    return this.http.put(Common.URI + '/api/user/'+ data.id +'?token=' + this.token,data);
  }

  getStaffDetails(id){
    return this.http.get(Common.URI + '/api/user/profile/'+ id +'?token=' + this.token);
  }


}