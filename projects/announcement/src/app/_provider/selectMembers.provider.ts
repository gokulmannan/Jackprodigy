import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';



const httpOptions = {
   headers: new HttpHeaders({
      'Content-Type': 'application/json',

   })
};
@Injectable({ providedIn: 'root' })

export class SelectMembersProvider {



   constructor(private http: HttpClient, private cookieService: CookieService) {

   }
   getselectedMembers() {
      return this.http.get(Common.URI + '/api/config?fields=staffType&token=' + this.cookieService.get('token'));
   }

   getUserData() {
      return this.http.get(Common.URI + '/api/token/' + this.cookieService.get('token') + '?token=' + this.cookieService.get('token'));
   }

   getDegreeDepartmentWithGroup(type, inactive) {
      return this.http.get(Common.URI + '/api/departments/accYearAll?filter=type eq ' + type + ', inactive eq ' + inactive + '&token=' + this.cookieService.get('token'));
   }
   getDepartment() {
      return this.http.get(Common.URI + '/api/departments/?token=' + this.cookieService.get('token'));
   }
 

   getAllHod(usertype, clgId) {
      return this.http.get(Common.URI + '/api/user?filter=usertype eq ' + usertype + ',collegeID eq ' + clgId + ' &fields=id&fields=name&fields=email&fields=specialization&token=' + this.cookieService.get('token'));
   }
   gettingDepartmentName(id){
      return this.http.get(Common.URI + '/api/user/' + id + '?token=' + this.cookieService.get('token'));

   }


}
