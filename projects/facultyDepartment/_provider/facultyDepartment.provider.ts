
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
  

@Injectable({ providedIn: 'root' })
export class FacultyDepartmentProvider {
    
    constructor(private http: HttpClient ,private cookieService : CookieService) {
     }
     getAllFacultyDepartments(){
    return this.http.get<any>(Common.URI+`/api/facultydepartment/getAllFacultyDepartments?token=`+this.cookieService.get('token'));
     }

   
}
    
  