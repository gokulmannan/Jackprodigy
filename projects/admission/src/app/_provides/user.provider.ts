import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserForm } from '../_models/UserForm';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({ providedIn: 'root' })
export class UserProvider {
  token: string;
  currentUser: {};
  constructor(private http: HttpClient,
    private cookieService:CookieService) { 
      this.token = this.cookieService.get('token')
      this.currentUser ={};
      this.currentUser  = this.cookieService.getObject("currentUser");
    }

  login(user) {
    return this.http.post(Common.URI + '/api/user/login?token='+this.token, user);
  }
  sendOtp(user) {
    return this.http.post(Common.URI + '/api/user/sendOtp?token='+this.token, user);
  }
  register(user) {
    return this.http.post(Common.URI + '/api/user/register?token='+this.token, user);
  }
  registerUser(user) {
    return this.http.post(Common.URI + '/api/user/registerUser?token='+this.token, user);
  }
  update(id, user: UserForm) {
    return this.http.post(Common.URI + '/api/user/update/' + id + '?token='+this.token, user);
  }
  updateUser(id, user) {
    return this.http.put(Common.URI + '/api/user/' + id + '?token='+this.token, user);
  }
  updateUserWithApplication(id, applicationId) {
  // var user = this.getUserById(id)
    console.log(id);
    console.log(applicationId)
    return this.http.put(Common.URI + '/api/user/withApplication/'+id+'/'+ applicationId + '?token='+this.token,null);
  }
  getUserById(id) {
    return this.http.get(Common.URI + '/api/user/' + id + '?token=' + this.token);
  }
  getAllusers() {
    return this.http.get(Common.URI +'/api/user?token='+this.token);
  }
  getcurrentUser() {
    return this.http.get(Common.URI +'/api/user/token='+this.token);
  }
  fileUpload(formData) {
    return this.http.post(Common.URI + '/api/s3/external/createInJackprodigy', formData);
  }
  fileUpdate(formData,oldVersionId,oldFileName) {
    return this.http.put(Common.URI + '/api/s3/external/updateInJackprodigy?oldVersionId='+oldVersionId+"&oldFileName="+oldFileName, formData);
  }
  getPreSignedUrl(versionId,fileKey) {
    return this.http.get(Common.URI + '/api/s3/external/generatePreSignedUrl?versionId='+versionId+'&fileKey='+fileKey)
  }

}
