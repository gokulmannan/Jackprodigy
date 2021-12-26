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
export class NavigationProvider {
  attendance: any;
  currentUser: any;
  token: any;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token')
    this.currentUser = {};
    this.currentUser = this.cookieService.getObject("currentUser");
  }


  getSubjectsByRegulation(id) {
    return this.http.get(Common.URI + `/api/reg/regulation/sub?filter=regulationID eq ` + id + `&token=` + this.token);
  }
  getBatchNameBySubject(id) {
    return this.http.get(Common.URI + `/api/subject/timetable?filter=regSubId eq ` + id + `,subjectStatus eq ACTIVE&order=des&token=` + this.token);
  }

}
