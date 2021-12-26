import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Studentsubmission } from '../_models/studentsubmission';
import { StudentsubmissionProvider } from '../_provider/studentsubmission.provider';
import { ToastrService } from 'ngx-toastr';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class StudentsubmissionService {

  public studentsubmission: Studentsubmission[];
  id: any;
  constructor(private studentsubmissionProvider: StudentsubmissionProvider,private toastr:ToastrService) {

  }
  getAssignment() {

    return new Promise((resolve, reject) => {
      this.studentsubmissionProvider.getAssignment(this.id).subscribe(
        (data: any[]) => {
          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  studentSubmission(assignmentId) {
    return new Promise((resolve, reject) => {
      this.studentsubmissionProvider.getSubmissionById(assignmentId).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });

  }
  getStudentAssignment(assignmentId) {
    return new Promise((resolve, reject) => {
      this.studentsubmissionProvider.getStudentAssignment(assignmentId).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  save(studentsubmission) {

    return new Promise((resolve, reject) => {
      console.log(1223)
      this.studentsubmissionProvider.saveAssignment(studentsubmission).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
        
        
    });
  }

  fileUpload(fileToUpload) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return new Promise((resolve, reject) => {
      this.studentsubmissionProvider.fileUpload(formData).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
      
    });
  }
  deleteFile(assignmentId) {
    return new Promise((resolve, reject) => {
      this.studentsubmissionProvider.deleteFile(assignmentId).subscribe(
        (data: any) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

}