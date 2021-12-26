import { Injectable } from '@angular/core';
import { FeedbackProvider } from '../../_provides/feedback/feedbackprovider';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private feedbackProvider:FeedbackProvider) { }



  createQuestions(formData) {
    return new Promise((resolve, reject) => {
      this.feedbackProvider.addNewQuestions(formData).subscribe(data => {
        resolve(data);
      });
    });
  }
  createFeedback(data) {
    return new Promise((resolve, reject) => {
      this.feedbackProvider.addNewFeedback(data).subscribe(data => {
        resolve(data);
      });
    });
  }
  getQuestions() {
    return new Promise((resolve, reject) => {
      this.feedbackProvider.getQuestions().subscribe(data => {
        resolve(data);
      });
    });
  }

  getfeedBack() {
    return new Promise((resolve, reject) => {
      this.feedbackProvider.getfeedBack().subscribe(data => {
        resolve(data);
      });
    });
  }

  updateQuestion(id, formData) {
    return new Promise((resolve, reject) => {
      this.feedbackProvider.updateQuestion(id, formData).subscribe(data => {
        resolve(data);
      });
    });
  }

       getEachFeedbackQuestions(id) {
    return new Promise((resolve, reject) => {
      this.feedbackProvider.getEachFeedbackQuestions(id).subscribe(data => {
        resolve(data);
      });
    });
  }

  createAnswer(data) {
    return new Promise((resolve, reject) => {
      this.feedbackProvider.createAnswer(data).subscribe(data => {
        resolve(data);
      });
    });
  }
  getFeedbackReport(id) {
    return new Promise((resolve, reject) => {
      this.feedbackProvider.getFeedbackReport(id).subscribe(data => {
        resolve(data);
      });
    });
  }
 
}
