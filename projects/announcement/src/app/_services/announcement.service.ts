import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from '../_models/announcement';
import { AnnouncementProvider } from '../_provider/announcement.provider';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class AnnouncementService {

  public announcement: Announcement[];//=[];

  constructor(private announcementProvider: AnnouncementProvider) {

  }


  getCurrentUserAnnouncement() {

    return new Promise((resolve, reject) => {
      this.announcementProvider.getCurrentUserAnnouncement().subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getAnnouncementById(id) {

    return new Promise((resolve, reject) => {
      this.announcementProvider.getAnnouncementById(id).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getRandomKey(id){
    return new Promise((resolve, reject) => {
      this.announcementProvider.getRandomKey(id).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  create(data) {

    return new Promise((resolve, reject) => {
      this.announcementProvider.create(data).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  getSentAnnouncements(id){
    return new Promise((resolve, reject) => {
      this.announcementProvider.getSentAnnouncements(id).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });

  }
  getReceivers(id){
    return new Promise((resolve, reject) => {
      this.announcementProvider.getReceivers(id).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });

  }
  sendAnnouncementAsSms(data){
    return new Promise((resolve, reject) => {
      this.announcementProvider.sendAnnouncementAsSms(data).subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  getSmsCount(){
    return new Promise((resolve, reject) => {
      this.announcementProvider.getSmsCount().subscribe(
        (data: any[]) => {

          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  getSentSms(query){
    return new Promise((resolve, reject) => {
      this.announcementProvider.getSentSms(query).subscribe(
        (data: any[]) => {
          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
  
  getDayCount(time){
    return new Promise((resolve, reject) => {
      this.announcementProvider.getDayCount(time).subscribe(
        (data: any[]) => {
          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
getMonthlySms(){
  return new Promise((resolve, reject) => {
    this.announcementProvider.getMonthly().subscribe(
      (data: any[]) => {

        resolve(data);
      },
      error => console.log("Error :: " + error)
    )
  });
}
exportAsXLSX(naacTemplateId) {
  this.announcementProvider.exportAsXLSX(naacTemplateId);
}
filterSms(date,time){
  return new Promise((resolve, reject) => {
    this.announcementProvider.filterSms(time,date).subscribe(
      (data: any[]) => {
        resolve(data);
      },
      error => console.log("Error :: " + error)
    )
  });
 
}
showAll(date){
  return new Promise((resolve, reject) => {
    this.announcementProvider.ShowAll(date).subscribe(
      (data: any[]) => {
        resolve(data);
      },
      error => console.log("Error :: " + error)
    )
  });
 
}



}