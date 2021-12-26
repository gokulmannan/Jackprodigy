
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
  
    })
  };
@Injectable({
  providedIn: 'root'
})
export class FeedbackProvider {
  token: string;

  constructor(private http: HttpClient,private cookieService:CookieService) { 
    this.token = this.cookieService.get('token');
  }

  addNewQuestions(formData) {
   
    JSON.stringify(formData);
    console.log(formData)
    return this.http.post(Common.URI + '/boot/feedback/questions?token='+this.token, formData);
  }
  addNewFeedback(formData) {
    return this.http.post(Common.URI + '/boot/feedback/feedbackTemplate?token='+this.token, formData);
  }
  getQuestions() {
    return this.http.get(Common.URI + '/boot/feedback/questions?order=des&token='+this.token);
  }
  getfeedBack() {
    return this.http.get(Common.URI + '/boot/feedback/feedbackTemplate?order=des&token='+this.token);
  }

  updateQuestion(id, formData) {
    return this.http.put(Common.URI + '/boot/feedback/questions/' + id+'?token='+this.token, formData);
  }

  getEachFeedbackQuestions(id) {
    return this.http.get(Common.URI + '/boot/feedback/feedbackTemplate/getQuestions?id='+ id);
  }
 
  createAnswer(formData) {
    return this.http.post(Common.URI + '/boot/feedback/answer', formData);
  }

  getFeedbackReport(id) {
    return this.http.get(Common.URI + '/boot/feedback/answer/report/'+ id+'?token='+this.token);
  }

 
  

}
