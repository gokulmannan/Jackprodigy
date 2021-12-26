import { Injectable } from '@angular/core';
import { UserProvider } from '../_provides/user.provider';
import { UserForm } from '../_models/UserForm';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private userProvider: UserProvider) { }



registerUser(user) {
  return new Promise((resolve, reject) => {
    this.userProvider.registerUser(user).subscribe(data => {
      resolve(data);
    });
  });
  }
  register(user) {
    return new Promise((resolve, reject) => {
      this.userProvider.register(user).subscribe(data => {
        resolve(data);
      });
    });
    }

  updateUser(id,user) {
    return new Promise((resolve, reject) => {
      this.userProvider.updateUser(id,user).subscribe(data => {
        resolve(data);
      });
    });
    }
    updateUserWithApplication(id,applicationId) {
      return new Promise((resolve, reject) => {
        this.userProvider.updateUserWithApplication(id,applicationId).subscribe(data => {
          resolve(data);
        });
      });
      }
    getUserById(id) {
      return new Promise((resolve, reject) => {
        this.userProvider.getUserById(id).subscribe(data => {
          resolve(data);
        });
      });
    }
    updateUserdata(id, user: UserForm) {
      return new Promise((resolve, reject) => {
        this.userProvider.update(id, user).subscribe(data => {
          resolve(data);
        });
      });
      }
      
      getAllUsers() {
        return new Promise((resolve, reject) => {
          this.userProvider.getAllusers().subscribe(data => {
            resolve(data);
          });
        });
      } 
      getcurrentUser() {
        return new Promise((resolve, reject) => {
          this.userProvider.getcurrentUser().subscribe(data => {
            resolve(data);
          });
        });
      } 
      uploadAttachment(fileToUpload){
         const formData: FormData = new FormData();
         formData.append('file', fileToUpload, fileToUpload.name);
        return new Promise((resolve, reject) => {
          this.userProvider.fileUpload(formData).subscribe((data) => {
            resolve(data);
          },
            error => console.log("Error :: " + error));
        });
      }
      putAttachment(fileToUpload,oldversionId,oldFileName){
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
       return new Promise((resolve, reject) => {
         this.userProvider.fileUpdate(formData,oldversionId,oldFileName).subscribe((data) => {
           resolve(data);
         },
           error => console.log("Error :: " + error));
       });
     }
      getPreSignedUrl(versionId,fileKey) {
        return new Promise((resolve, reject) => {
          this.userProvider.getPreSignedUrl(versionId,fileKey).subscribe(data => {
            resolve(data);
          });
        });
      } 


}
