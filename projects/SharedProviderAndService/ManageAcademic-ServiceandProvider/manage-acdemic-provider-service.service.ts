 
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'projects/user/_service/user.service';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common';
 
@Injectable({
  providedIn: 'root'
})
export class ManageAcdemicProviderServiceService {


  token;
  constructor(private http: HttpClient, private cookie: CookieService, private user: UserService,
    private toast: ToastrService) {
    this.token = cookie.get('token');
  }


  getDepartment() {
    return this.http.get(Common.URI + '/api/departments?token=' + this.token);
  }
  getAcademicyear(id) {
    return this.http.get(Common.URI + '/api/accyear?filter=departmentId eq'+id+'&token=' + this.token);
  }

  activate(data) {
    return this.http.put(Common.URI + '/api/accyear?token='+this.token,data);
  }
  update(data) {
    JSON.stringify(data);
    return this.http.put(Common.URI + '/api/accyear?token='+this.token,data);
  }

  addAcademic(data) {
    JSON.stringify(data);
    return this.http.post(Common.URI + '/api/accyear?token='+this.token,data);
  }

  delete(id) {
    return this.http.delete(Common.URI + '/api/accyear/'+id+'?token='+this.token);
  }
  fetchAccYear(departmentId) {
   return this.http.get(Common.URI + '/api/accyear?filter=departmentId eq'+departmentId+',inactive eq NO'+'&token=' + this.token);
  }
  getGroup(id) {
   return this.http.get(Common.URI + '/api/group?filter=accYearId eq'+id+',type eq CURRENT'+'&token=' + this.token);

  }

  //creating new group for specifi acdemic Year
  createGroup(group) {
    return this.http.post(Common.URI + '/api/group?token='+this.token,group);
  }
  //deleteGroup by id
  deleteGroup(id) {
    return this.http.delete(Common.URI + '/api/group/'+id+'?token='+this.token);
  }

  //crud in Group popup
  getById(id) {
  return this.http.get(Common.URI + '/api/group/'+id+'?token='+this.token);
  }
  updateGroup(data) {
   return this.http.put(Common.URI + '/api/group?token='+this.token,data);
  }

  //fetching details of created By using departmentID
  createdBy(departmentID) {

  return this.http.get(Common.URI + '/api/reg/year?filter=departmentID eq'+departmentID+'&token='+this.token);
  }
}

