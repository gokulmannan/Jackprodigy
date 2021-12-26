import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { manageDepartmentProvider } from '../_provider/manageDepartment.provider';






const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
  
    })
  };
  @Injectable({ providedIn: 'root' })
  export class manageDepartmentService {
  createData:any;
  
     constructor(private manageDepartmentProvider: manageDepartmentProvider ,private toastr:ToastrService) {
  
     }
  
  
    getAllDepartments() {
      return new Promise((resolve, reject) => {
        this.manageDepartmentProvider.getDepartments().subscribe(
          (data: any[]) => {
  
            resolve(data);
          },
          error => console.log("Error :: " + error)
        )
      });
    }


    getUsers(id) {
       return new Promise((resolve, reject) => {
         this.manageDepartmentProvider.getUsers(id).subscribe(
           (data: any) => {
   
             resolve(data);
           },
           error => console.log("Error :: " + error)
         )
       });
     }

     getFaculty() {
       return new Promise((resolve, reject) => {
         this.manageDepartmentProvider.getFaculty().subscribe(
           (data: any) => {
   
             resolve(data);
           },
           error => console.log("Error :: " + error)
         )
       });
     }

     getFacultys(){
      return new Promise((resolve, reject) => {
        this.manageDepartmentProvider.getFacultys().subscribe(
          (data: any) => {
  
            resolve(data);
          },
          error => console.log("Error :: " + error)
        )
      });
     }

     getFacultyDepartment(id){
     return new Promise((resolve, reject) => {
       this.manageDepartmentProvider.getFacultyDepartment(id).subscribe(
         (data: any) => {
 
           resolve(data);
         },
         error => console.log("Error :: " + error)
       )
     });
    }

     createDepartment(data){
     return new Promise((resolve, reject) => {
       this.manageDepartmentProvider.createDepartment(data).subscribe(
         (data: any) => {
 
           resolve(data);
         },
         error => console.log("Error :: " + error)
       )
     });
    }

    editDepartment(data){
     return new Promise((resolve, reject) => {
       this.manageDepartmentProvider.updateDepartment(data).subscribe(
         (data: any) => {
 
           resolve(data);
         },
         error => console.log("Error :: " + error)
       )
     });
    }



    deleteDepartment(id){
     return new Promise((resolve, reject) => {
        this.manageDepartmentProvider.deleteDepartment(id).subscribe(
         (data: any) => {
 
           resolve(data);
         },
         error => console.log("Error :: " + error)
       )
     });
    }


    getFacDepartment(){
      return new Promise((resolve, reject) => {
        this.manageDepartmentProvider.getFacDepartment().subscribe(
          (data: any) => {
  
            resolve(data);
          },
          error => console.log("Error :: " + error)
        )
      });
     }

     getFacDepartmentUser(id){
      return new Promise((resolve, reject) => {
        this.manageDepartmentProvider.getStaff(id).subscribe(
          (data: any) => {
  
            resolve(data);
          },
          error => console.log("Error :: " + error)
        )
      });
     }

     assign(id){
      return new Promise((resolve, reject) => {
        this.manageDepartmentProvider.getStaff(id).subscribe(
          (data: any) => {
  
            resolve(data);
          },
          error => console.log("Error :: " + error)
        )
      });
     }

     assignStaff(data){
      return new Promise((resolve, reject) => {
        this.manageDepartmentProvider.updateAssignStaff(data).subscribe(
          (data: any) => {
  
            resolve(data);
          },
          error => console.log("Error :: " + error)
        )
      });
     }
    
     getstaffDetail(id){
      return new Promise((resolve, reject) => {
        this.manageDepartmentProvider.getStaffDetails(id).subscribe(
          (data: any) => {
  
            resolve(data);
          },
          error => console.log("Error :: " + error)
        )
      });
     }
  }