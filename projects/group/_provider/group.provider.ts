import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Group } from '../_models/group';
import { CookieService } from 'ngx-cookie';
import { Common } from 'src/app/common';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
}
@Injectable({ providedIn: 'root' })
export class GroupProvider {
  group: Group[];

  currentUser: any;
  token: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token')
  }

  list(id) {
    return this.http.get(Common.URI + '/api/group?filter=accYearId eq ' + id + ',type eq CURRENT &token=' + this.token);

  }
  getGroupStudents(id) {
    return this.http.get(Common.URI + '/api/group/student/'+id+'?token=' +  this.token);
  }
  getAllGroups(){
    return this.http.get(Common.URI + '/api/group?token=' + this.token);

  }
}
