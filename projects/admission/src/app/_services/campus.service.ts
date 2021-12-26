import { Injectable } from '@angular/core';
import { CampusProvider } from '../_provides/campus.provider';

@Injectable({
  providedIn: 'root'
})
export class CampusService {

constructor(private campusProvider: CampusProvider) { }

createCampus(campusData) {
  return new Promise((resolve, reject) => {
    this.campusProvider.createCampus(campusData).subscribe(data => {
      resolve(data);
    });
  });
  }

  getAllCampus() {
    return new Promise((resolve, reject) => {
      this.campusProvider.getAllCampus().subscribe(data => {
        resolve(data);
      });
    });
  }

   getById(id) {
    return new Promise((resolve, reject) => {
      this.campusProvider.getById(id).subscribe(data => {
        resolve(data);
      });
    });
   }
   updateCampus(id, campusData) {
    return new Promise((resolve, reject) => {
      this.campusProvider.updateCampus(id, campusData).subscribe(data => {
        resolve(data);
      });
    });
  }

  deleteCampus(id) {
    return new Promise((resolve, reject) => {
      this.campusProvider.deleteCampus(id).subscribe(data => {
        resolve(data);
      });
    });
  }
 
  }



