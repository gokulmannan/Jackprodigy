import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class CampusProvider {
  currentUser: {};
  token: string;
  constructor(private http: HttpClient,
    private router: Router,
    private cookieService:CookieService) { 
      this.token = this.cookieService.get('token')
      this.currentUser ={};
      this.currentUser  = this.cookieService.getObject("currentUser");
    }

  createCampus(campusData) {
    return this.http.post(Common.URI + '/boot/campus?token='+this.token, campusData);
  }

  getAllCampus() {
    return this.http.get(Common.URI + '/boot/campus?token='+this.token);
  }

  getById(id) {
    return this.http.get(Common.URI + '/boot/campus/' + id+'?token='+this.token);
  }

  updateCampus(id, campusData) {
    return this.http.put(Common.URI + '/boot/campus/' + id +'?token='+this.token , campusData);
  }

  deleteCampus(id) {
    return this.http.delete(Common.URI + '/boot/campus/' + id +'?token='+this.token);
  }
}
