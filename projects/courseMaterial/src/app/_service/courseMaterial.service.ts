import { Injectable } from '@angular/core';
import { Coursematerial } from '../_models/courseMaterial';
import { CoursematerialProvider } from '../_provider/courseMaterial.provider';


@Injectable({ providedIn: 'root' })
export class CoursematerialService {

  public coursematerial: Coursematerial[];

  constructor(private coursematerialProvider: CoursematerialProvider) {

  }


  getCoursematerialData(currentUser) {

    return new Promise((resolve, reject) => {
      this.coursematerialProvider.getCourseMaterial(currentUser).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getCurrentUserSubjects(currentUser) {
    return new Promise((resolve, reject) => {
      this.coursematerialProvider.getCurrentUserSubjects(currentUser).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }
  create(fileToUpload, courseMaterial) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    return new Promise((resolve, reject) => {
      this.coursematerialProvider.postFile(formData, courseMaterial).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }


  updateCourseMaterialsWithoutFileChange(fileToUpload: File, courseMaterial, id) {

    return new Promise((resolve, reject) => {
      this.coursematerialProvider.updateCourseMaterialsWithoutFileChange(fileToUpload, courseMaterial, id).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }

  updateCourseMaterialsWithFileChange(fileToUpload: File, courseMaterial, id) {

    return new Promise((resolve, reject) => {
      this.coursematerialProvider.updateCourseMaterialsWithFileChange(fileToUpload, courseMaterial, id).subscribe((data) => {
        resolve(data);
      },

        error => console.log("Error :: " + error));

    });
  }

  deleteCourseMaterial(id) {
    return new Promise((resolve, reject) => {
      this.coursematerialProvider.deleteCourseMaterial(id).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }
  getStaffCourseMaterials(id) {
    return new Promise((resolve, reject) => {
      this.coursematerialProvider.getStaffCourseMaterials(id).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }


  getSubject(currentUser) {

    return new Promise((resolve, reject) => {
      this.coursematerialProvider.getStudentSubject(currentUser).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  getStudentSubjects(id) {
    return new Promise((resolve, reject) => {
      this.coursematerialProvider.getStudentSubjectsData(id).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }


}