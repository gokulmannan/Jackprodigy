import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AssignmentProvider } from '../_provider/assignment.provider';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class AssignmentService {

  constructor(private assignmentProvider: AssignmentProvider) {

  }

  getAssignmentById(currentUser) {

    return new Promise((resolve, reject) => {
      this.assignmentProvider.getAssignmentById(currentUser).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }


  fileUpload(fileToUpload) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return new Promise((resolve, reject) => {
      this.assignmentProvider.fileUpload(formData).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }

  fileChange(fileToUpload, versionId, filekey) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return new Promise((resolve, reject) => {
      this.assignmentProvider.fileChange(formData, versionId, filekey).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }
  create(assignment) {

    return new Promise((resolve, reject) => {
      this.assignmentProvider.saveDetails(assignment).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }

  selectSubject(currentUser) {
    return new Promise((resolve, reject) => {
      this.assignmentProvider.subject(currentUser).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });

  }

  getAssignment(id) {
    return new Promise((resolve, reject) => {
      this.assignmentProvider.getAssignment(id).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });

  }
  putAssignment(data) {
    return new Promise((resolve, reject) => {
      this.assignmentProvider.putAssignment(data).subscribe(
        (data: any) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  deleteFile(versionId, fileKey) {
    return new Promise((resolve, reject) => {
      this.assignmentProvider.deleteFile(versionId, fileKey).subscribe(
        (data: any) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
}