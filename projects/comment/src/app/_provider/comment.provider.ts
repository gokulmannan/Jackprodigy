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

export class CommentProvider {
  currentUser: any;
  token: any;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('token')
    this.currentUser = {};
    this.currentUser = this.cookieService.getObject("currentUser");
  }
  createComment(formData) {
    return this.http.post(Common.URI + '/boot/comment?token=' + this.token, formData);
  }
  updateComment(formData) {
    return this.http.put(Common.URI + '/boot/comment/' + formData.id + '?token=' + this.token, formData);
  }

  getComments(referenceId) {
    return this.http.get(Common.URI + '/boot/comment?query=filter:referenceId eq '+referenceId+'&token=' + this.token);
  }
  getCommentById(commentId) {
    return this.http.get(Common.URI + '/boot/comment/' + commentId + '?token=' + this.token);
  }
}
