
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from '../_models/department';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class DepartmentProvider {
  department: Department[];
  currentUser: any;
  token: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token')
    this.currentUser = {};
    this.currentUser = this.cookieService.getObject("currentUser");
  }

  list() {
    return this.http.get(Common.URI + '/api/departments?token=' + this.token);

  }

  getById(id): Observable<Department> {
    return this.http.get<Department>(Common.URI + '/departments/' + id + '?token=' + this.token);
  }



}