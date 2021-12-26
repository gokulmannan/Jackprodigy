import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Common } from 'src/app/common';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })

export class FileUploadProvider {
  currentUser: any;
  token:any;
  constructor(private http: HttpClient,  private cookieService:CookieService) {
    this.token = this.cookieService.get('token')
  }

  fileUpload(formData) {
    return this.http.post(Common.URI + '/api/s3/external/createInJackprodigy', formData);
  }
  fileUpdate(formData, oldVersionId, oldFileName) {
    return this.http.put(Common.URI + '/api/s3/external/updateInJackprodigy?oldVersionId=' + oldVersionId + "&oldFileName=" + oldFileName, formData);
  }
  deleteFile(versionId, fileKey) {
    return this.http.delete(Common.URI + '/api/s3/external/deleteInJackprodigy?versionId=' + versionId + "&fileKey=" + fileKey);
  }
}
