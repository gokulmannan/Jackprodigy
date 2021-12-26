
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
export class StaffTypeProvider {
    
    constructor(private http: HttpClient ,private cookieService : CookieService) {
     }
     getAllStaffType(){
    return this.http.get<any>(Common.URI+`/api/staff-type?token=`+this.cookieService.get('token'));
     }

}
    
  