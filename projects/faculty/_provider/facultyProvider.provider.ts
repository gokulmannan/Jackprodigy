
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
@Injectable({ providedIn: 'root' })
export class FacultyProvider {
  currentUser: any;
  token:any;

    constructor(private http: HttpClient,private cookieService:CookieService) {
      this.token = this.cookieService.get('token')
      this.currentUser ={};
      this.currentUser  = this.cookieService.getObject("currentUser");
     }

//      list () {
//      // let user:any   = JSON.parse(localStorage.getItem('currentUser'));
//     return this.http.get(Common.URI +'/api/departments?token='+this.token);
    
//   }

//  getById(id) : Observable<Department>{
//  // let user:any = JSON.parse(localStorage.getItem('currentUser'));
//     return this.http.get<Department>(Common.URI +'/departments/'+id+'?token='+this.token);
//  }

getFaculty(id){
    return this.http.get(Common.URI + '/api/facultydepartment/edit/'+id+'?token=' + this.token);

}
getAllFacultyDept(){
    return this.http.get(Common.URI + '/api/facultydepartment/get?token=' + this.token);

}

private handleError(error: Response) {
    return Observable.throw(error.statusText);
}
   
}