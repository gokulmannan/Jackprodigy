import { Injectable } from '@angular/core';
import { NavigationProvider } from '../provider/navigation.provider';
//import { AttendanceProvider } from '../_providers/attendance.provider';
@Injectable({
  providedIn: 'root'
})
export class NavigationService { 
attendance : any;
  constructor(private navigationProvider : NavigationProvider) { }

  


getSubjectsByRegulation(id){
    return  new Promise((resolve, reject) => {
        this.navigationProvider.getSubjectsByRegulation(id).subscribe((data:any)=>{
          resolve(data),
          error => console.log("Error :: " + error)
        });
      });
}
getBatchNameBySubject(id){
  return  new Promise((resolve, reject) => {
    this.navigationProvider.getBatchNameBySubject(id).subscribe((data:any)=>{
      resolve(data),
      error => console.log("Error :: " + error)
    });
  });
}
}
