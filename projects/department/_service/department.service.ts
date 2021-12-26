import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { Department } from '../_models/department';
import { DepartmentProvider } from '../_provider/department.provider';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
@Injectable({ providedIn: 'root' })
export class DepartmentrService {
    
  public departments:Department[];//=[];
    public department:Department = new Department();
    constructor(private departmentProvider: DepartmentProvider) {
        
     }

    
     list () {
      
      return  new Promise((resolve, reject) => {
      this.departmentProvider.list().subscribe(
        (data:any[]) => {this.departments = data
          
         resolve(this.departments);
        },
        error => console.log("Error :: " + error)
    )
      });
      }

      getById(id){
        return new Promise((resolve, reject)=> {
          this.departmentProvider.getById(id).subscribe((data:Department) =>{
            this.department = data;
            resolve(this.department);
          });
        });
      }
    /* list () {
      let ob = [];
      this.departmentProvider.list().subscribe(
         (data:any[] )=> {
           return data;
          
        }
       );
    } */
     
    

}