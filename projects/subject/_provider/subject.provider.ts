
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
export class SubjectProvider {

  token: any;
  currentUser: any;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token')
    this.currentUser = {};
    this.currentUser = this.cookieService.getObject("currentUser");
    console.log(this.currentUser)
  }

  list(id) {
    return this.http.
      get(Common.URI + '/api/subject/staffHandling?in=stafflist.staffid eq ' + id + '&filter=subjectStatus eq ACTIVE&token=' + this.token);

  }



}