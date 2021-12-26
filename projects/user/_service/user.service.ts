import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProvider } from '../_provider/user.provider';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class UserService {



  constructor(private userProvider: UserProvider) {

  }


  getFilteredStaff(facultyDept, staffType) {
    return new Promise((resolve, reject) => {
      return this.userProvider.getFilteredStaff(facultyDept, staffType).subscribe((data: any[]) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getStaffByFacultyDept(facultyDept) {
    return new Promise((resolve, reject) => {
      return this.userProvider.getStaffByFacultyDept(facultyDept.id).subscribe((data: any[]) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getCurrentUser() {
    return new Promise((resolve, reject) => {
      this.userProvider.getCurrentUser().subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }
  getSingleUser() {
    return new Promise((resolve, reject) => {
      this.userProvider.getSingleUser().subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }

  getAllStaff(){
    return new Promise((resolve, reject) => {
      this.userProvider.getAllStaff().subscribe((data: any) => {
        resolve(data);
      },
        error => console.log("Error :: " + error)
      )
    });
  }


}