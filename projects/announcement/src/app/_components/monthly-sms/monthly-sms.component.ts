import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { AnnouncementService } from '../../_services/announcement.service';

@Component({
  selector: 'app-monthly-sms',
  templateUrl: './monthly-sms.component.html',
  styleUrls: ['./monthly-sms.component.css']
})
export class MonthlySmsComponent implements OnInit {
  smsCount: any;
  smsReview: any;

  constructor(private announcementService:AnnouncementService,
    private loadingService:LoadingAlertService,
    private datepipe:DatePipe) { }

  ngOnInit(): void {
  this.getMonthly()
  this.smsCount()
  }

  getMonthly(){
    this.loadingService.showLoading();
    this.announcementService.getMonthlySms().then((data:any)=>{
      this.smsReview = data;
      //console.log(this.smsCount)
    })
    this.loadingService.hideLoading();
    
}
getSmsCount(){
  this.loadingService.showLoading();
  this.announcementService.getSmsCount().then((data:any)=>{
    this.smsCount = data;
    //console.log(this.smsCount)
  })
  this.loadingService.hideLoading();
  }


  exportAsXLSX(id) {
    this.announcementService.exportAsXLSX(id);
   
  }

}
