import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class CourseProvider {
  token: string;
  currentUser: {};
  constructor(private http: HttpClient,
    private router: Router,
    private cookieService:CookieService) { 
      this.token = this.cookieService.get('token')
      this.currentUser ={};
      this.currentUser  = this.cookieService.getObject("currentUser");
    }

  createCourse(courseData) {
    return this.http.post(Common.URI + '/boot/course?token='+this.token, courseData);
  }

  getAllCourses() {
    return this.http.get(Common.URI + '/boot/course?token='+this.token);
  }

  getById(id) {
    return this.http.get(Common.URI + '/boot/course/' + id+'?token='+this.token);
  }

  updateCourse(id, courseData) {
    return this.http.put(Common.URI + '/boot/course/' + id+'?token='+this.token, courseData);
  }

  deleteCourse(id) {
    return this.http.delete(Common.URI + '/boot/course/' + id+'?token='+this.token);
  }
}
