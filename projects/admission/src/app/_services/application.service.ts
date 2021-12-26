import { Injectable } from '@angular/core';
import { ApplicationProvider } from '../_provides/application.provider';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

constructor(private applicationProvider: ApplicationProvider) { }

createApplication(applicationData) {
  return new Promise((resolve, reject) => {
    this.applicationProvider.createApplication(applicationData).subscribe(data => {
      resolve(data);
    });
  });
  }

  getAllApplications() {
    return new Promise((resolve, reject) => {
      this.applicationProvider.getAllApplications().subscribe(data => {
        resolve(data);
      });
    });
  }

   getById(id) {
    return new Promise((resolve, reject) => {
      this.applicationProvider.getById(id).subscribe(data => {
        resolve(data);
      });
    });
   }
   updateApplication(id, applicationData) {
    return new Promise((resolve, reject) => {
      this.applicationProvider.updateApplication(id, applicationData).subscribe(data => {
        resolve(data);
      });
    });
  }

  deleteApplication(id) {
    return new Promise((resolve, reject) => {
      this.applicationProvider.deleteApplication(id).subscribe(data => {
        resolve(data);
      });
    });
  }
 
  }



