import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../_models/group';
import { GroupProvider } from '../_provider/group.provider';



const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
@Injectable({ providedIn: 'root' })
export class GroupService {
    
  public group:Group[];
    
    constructor(private GroupProvider: GroupProvider) {
        
     }

    
     list (id) {
      
      return  new Promise((resolve, reject) => {
      this.GroupProvider.list(id).subscribe(
        (data:any[]) => {this.group = data
          resolve(this.group);
        },
        error => console.log("Error :: " + error)
    )
      });
      }

      getGroupStudents (id) {
      
        return  new Promise((resolve, reject) => {
        this.GroupProvider.getGroupStudents(id).subscribe(
          (data:any[]) => {this.group = data
            resolve(this.group);
          },
          error => console.log("Error :: " + error)
      )
        });
        }
    
    getAllGroups(){
      
      return  new Promise((resolve, reject) => {
        this.GroupProvider.getAllGroups().subscribe(
          (data:any[]) => { data
            resolve(data);
          },
          error => console.log("Error :: " + error)
      )
        });
    }

}