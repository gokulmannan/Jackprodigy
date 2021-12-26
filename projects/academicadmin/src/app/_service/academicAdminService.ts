
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie';
import { AcademicAdminProvider } from '../_provider/academicAdminProvider';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class AcademicAdminService {
  constructor(private http: HttpClient,
    private cookieService: CookieService,private academicAdminProvider:AcademicAdminProvider) {

  }

uploadFile(fileToUpload) {

  const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return new Promise((resolve, reject) => {
      this.academicAdminProvider.uploadFile(formData).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }



}