import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class ApplicationProvider {
  currentUser: {};
  token: string;
  constructor(private http: HttpClient,
    private router: Router,
    private cookieService:CookieService) { 
      this.token = this.cookieService.get('token')
      this.currentUser ={};
      this.currentUser  = this.cookieService.getObject("currentUser");
    }

  createApplication(applicationData) {
    return this.http.post(Common.URI + '/boot/application?token='+this.token, applicationData);
  }

  getAllApplications() {
    return this.http.get(Common.URI + '/boot/application?token='+this.token);
  }

  getById(id) {
    return this.http.get(Common.URI + '/boot/application/' + id+'?token='+this.token);
  }

  updateApplication(id, applicationData) {
    return this.http.put(Common.URI + '/boot/application/' + id +'?token='+this.token, applicationData);
  }

  deleteApplication(id) {
    return this.http.delete(Common.URI + '/boot/application/' + id+'?token='+this.token);
  }
}
