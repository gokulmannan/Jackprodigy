import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SelectMembersProvider } from '../_provider/selectMembers.provider';
import { UserProvider } from 'projects/user/_provider/user.provider';
import { SelectEachMembersPopupComponent } from '../_components/announcement/select-members/select-each-members-popup/select-each-members-popup.component';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
  @Injectable({ providedIn: 'root' })
  export class SelectMembersService {
    public members:any[];
   announcementData:any;
  
      constructor(private selectMembersProvider :SelectMembersProvider, private userProvider :UserProvider ) {
          
       }

       getMemberData(){
        return  new Promise((resolve, reject) => {
            this.selectMembersProvider.getselectedMembers().subscribe(
              (data:any[]) => {this.members = data,
                
               resolve(this.members);
              },
              error => console.log("Error :: " + error)
          )
            });
          }
            getUserData(){
              console.log("service")
              return  new Promise((resolve, reject) => {
                  this.selectMembersProvider.getUserData().subscribe(
                    (data:any[]) => {this.members = data,
                      
                     resolve(this.members);
                    },
                    error => console.log("Error :: " + error)
                )
                  });
            }
      
            getDegreeDepartmentWithGroup(type,inactive){
              return  new Promise((resolve, reject) => {
                this.selectMembersProvider.getDegreeDepartmentWithGroup(type,inactive).subscribe(
                  (data:any[]) => {this.members = data,
                    
                   resolve(this.members);
                  },
                  error => console.log("Error :: " + error)
              )
                });
          }
          getDepartment(){
            return  new Promise((resolve, reject) => {
              this.selectMembersProvider.getDepartment().subscribe(
                (data:any[]) => {this.members = data,
                  
                 resolve(this.members);
                },
                error => console.log("Error :: " + error)
            )
              });
        }
          
        getAllHod(usertype,clgId){
          return  new Promise((resolve, reject) => {
            this.selectMembersProvider.getAllHod(usertype,clgId).subscribe(
              (data:any[]) => {this.members = data,
                
               resolve(this.members);
              },
              error => console.log("Error :: " + error)
          )
            });
      }


      gettingDepartmentName(id){
        return  new Promise((resolve, reject) => {
          this.selectMembersProvider.gettingDepartmentName(id).subscribe(
            (data:any[]) => {this.members = data,
              
             resolve(this.members);
            },
            error => console.log("Error :: " + error)
        )
          });
      }


       getsingleuser(){
    //     return this.userProvider.getAll();
     }
     

       }
    