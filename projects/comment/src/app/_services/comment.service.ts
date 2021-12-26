import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { CommentProvider } from '../_provider/comment.provider';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class CommentService {

  currentUser: any;
  constructor(private commentProvider: CommentProvider,
    private cookieService: CookieService) {
    this.currentUser = this.cookieService.getObject("currentUser");

  }

  createComment(formData) {
    return new Promise((resolve, reject) => {
      this.commentProvider.createComment(formData).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  updateComment(formData) {
    return new Promise((resolve, reject) => {
      this.commentProvider.updateComment(formData).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getComments(referenceId) {
    return new Promise((resolve, reject) => {
      this.commentProvider.getComments(referenceId).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getCommentById(id) {
    return new Promise((resolve, reject) => {
      this.commentProvider.getCommentById(id).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
}