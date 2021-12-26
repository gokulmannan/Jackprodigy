import { manageMentorProvider } from './../provider/manageMentor.provider';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class manageMentorService {
  departments: any;
  accyear: any[];
  mentor: any[];

  constructor(private ManageMentorProvider: manageMentorProvider) {

  }
  getDepartments() {
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.getDepartments().subscribe(
        (data: any[]) => {
          this.departments = data

          resolve(this.departments);
        },
        error => console.log("Error :: " + error)
      )
    });

  }
  getStudentsById(departmentid: any) {
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.getDepartmentStudentsById(departmentid).subscribe((data: any) => {
        resolve(data),
          error => console.log("Error :: " + error)
      });
    });
  }
  getStaff(staffId) {
   
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.getStaff(staffId).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });

  }
  getUser(userId) {
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.getUser(userId).subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getlistAc(id) {

    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.getListAc(id).subscribe(
        (data: any[]) => {
          this.accyear = data
          resolve(this.accyear);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  getAccYear(id) {

    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.getAccYear(id).subscribe(
        (data: any[]) => {
          this.mentor = data
          resolve(this.mentor);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  getStudents(studentId) {

    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.getStudents(studentId).subscribe(
        (data: any[]) => {
          this.mentor = data
          resolve(this.mentor);
        },
        error => console.log("Error :: " + error)
      )
    });
  }



  addStudents(data) {
    return new Promise((resolve, reject) => {

      this.ManageMentorProvider.AddStudents(data).subscribe(
        (data: any) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  } 

  postStudents(data) {
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.postStudent(data).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });

  }
  getComment(studentId) {
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.getComment(studentId).subscribe((data: any) => {
        resolve(data),
          error => console.log("Error :: " + error)
      });
    });


  }
  postingComment(data) {
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.PostingComment(data).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  deleteComent(id) {
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.deleteComment(id).subscribe((data) => {
        resolve(data);
      },
        error => console.log("Error :: " + error));
    });
  }


  putComments(data) {
    return new Promise((resolve, reject) => {

      this.ManageMentorProvider.putComment(data).subscribe(
        (data: any) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  postMentorLog(data) {
    return new Promise((resolve, reject) => {
      this.ManageMentorProvider.postMentorLog(data).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }





}
