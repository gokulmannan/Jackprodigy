
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Accyear } from '../_models/accyear';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class AccyearProvider {
  accyear: Accyear[];
  currentUser: any;
  token:any;
  constructor(private http: HttpClient,  private cookieService:CookieService) {
    this.token = this.cookieService.get('token')
    this.currentUser ={};
    this.currentUser  = this.cookieService.getObject("currentUser");
  }


  list(id) {
    return this.http.
      get(Common.URI + '/api/accyear?filter=departmentId eq ' + id + ',inactive eq NO &token=' + this.token);
  }
}