import { Injectable } from '@angular/core';
import { FacultyProvider } from '../_provider/facultyProvider.provider';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {

  constructor(private facultyProvider:FacultyProvider) { }

  getFaculty(id){
    return new Promise((resolve, reject) => {
      this.facultyProvider.getFaculty(id).subscribe(
        (data: any) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
   }

   getAllFacultyDept(){
    return new Promise((resolve, reject) => {
      this.facultyProvider.getAllFacultyDept().subscribe(
        (data: any) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
   }
}
