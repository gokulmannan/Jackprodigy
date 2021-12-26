
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Announcement } from '../_models/announcement';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common';
import { CookieService } from 'ngx-cookie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class AnnouncementProvider {
  announcement: Announcement[];


  constructor(private http: HttpClient,
    private cookieService: CookieService) {

  }

  getCurrentUserAnnouncement() {
    return this.http.get(Common.URI + '/boot/announcement/userview?token=' + this.cookieService.get("token"));

  }
  create(data) {
    return this.http.post(Common.URI + '/boot/announcement?token=' + this.cookieService.get("token"), data);
    
  }
  getAnnouncementById(id){
    return this.http.get(Common.URI + '/boot/announcement/view-sms?id='+id);
  }
  getSentAnnouncements(id){
    return this.http.get(Common.URI + '/boot/announcement?query=filter:createdBy eq '+id+'&token='+this.cookieService.get("token"));
  }
  getReceivers(id){
    return this.http.get(Common.URI + '/boot/announcement/getReceivers/'+id+'?token='+this.cookieService.get("token"));

  }
  getRandomKey(id){
    return this.http.get(Common.URI + '/boot/announcementUrl/getAnnouncement?randomKey='+id);

  }
  sendAnnouncementAsSms(data){
    return this.http.post(Common.URI + '/api/communication/sendSms?token=' + this.cookieService.get("token"), data);
  }
  getSentSms(query){
    return this.http.get(Common.URI + '/api/sms/sentSms'+query+'&token='+this.cookieService.get("token"));
   }
 
   getDayCount(time){
     return this.http.get(Common.URI + '/api/sms/daySmsCount/'+ time+ '?token='+this.cookieService.get("token"));
   }
 getMonthly(){
   return this.http.get(Common.URI + '/api/sms/report/monthly?token='+this.cookieService.get("token"))
 
 }
 exportAsXLSX(templateId){
   let url= Common.URI + '/api/sms/excelReport/monthly/'+templateId+'?token='+this.cookieService.get("token");
   //saveAs(url,"template");
 
 }
 filterSms(date,sms){
   return this.http.get(Common.URI+"/api/sms/sentSms?filter=sDate eq "+date+",status eq "+sms+"&start=0&count=25&order=des&sort=_id&token="+this.cookieService.get("token"))
   
 }
 ShowAll(date){
 return this.http.get(Common.URI+"/api/sms/sentSms?filter=sDate eq "+date+"&start=0&count=25&order=des&sort=_id&token="+this.cookieService.get("token"))
   
 }
 getSmsCount(){
  return this.http.get(Common.URI + '/api/sms/smsCount?token='+this.cookieService.get("token"));
}

}