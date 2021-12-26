

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Regulation } from '../_models/regulation';
import { CookieService } from 'ngx-cookie';
import { Common } from 'src/app/common';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class RegulationProvider {
  regulation: Regulation[];

  currentUser: any;
  token: any;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token')
    this.currentUser = {};
    this.currentUser = this.cookieService.getObject("currentUser");
  }

  list(id) {
    return this.http.
      get(Common.URI + '/api/reg/year?filter=departmentID eq ' + id + '&token=' + this.token);

  }

  create(regSubject) {
    return this.http.post(Common.URI + '/api/reg/sub?token=' + this.token, regSubject);

  }
  delete(id) {
    return this.http.delete(Common.URI + '/api/reg/sub/' + id + '/welcome@123/' + '?token=' + this.token);


  }
  update(editReg) {
    return this.http.post(Common.URI + '/api/reg/sub?token=' + this.token, editReg);

  }

  getRegSubjects(deptId: string, regulation: string, semester: string) {
    return this.http.
      get(Common.URI + '/api/reg/sub?filter=departmentID eq ' + deptId + ', regulationID eq' + regulation +
        ', semester eq ' + semester + '&token=' + this.token);

  }


}