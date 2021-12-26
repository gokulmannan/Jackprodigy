import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { AnnouncementService } from '../../_services/announcement.service';

@Component({
  selector: 'app-sent-sms',
  templateUrl: './sent-sms.component.html',
  styleUrls: ['./sent-sms.component.css']
})
export class SentSmsComponent implements OnInit {

  smsCount: any;
  sentSms: any=[];
  dateCtrl:any;
  dayCount: any;
  time: any;
  itemStatus:any;
  filterOptions: any;
  page = 1;
  pageSize =10;
  
  filterItem: { showAll: any; };
  dayCounts: any;
 
  constructor(private announcementService:AnnouncementService,
    private loadingService:LoadingAlertService,
    private datepipe:DatePipe
    
    ) { }

  ngOnInit(): void {
    this.getSmsCount();
    this.smsCount={};
   
    this.sentSms=[];
    this.filterOptions = {
      options : [ {
        name : 'Show All',
        status : 'A'
      }, {
        name : 'Failed',
        status : 'F'
      }, {
        name : 'Queued',
        status : 'P'
      }, {
        name : 'Sent',
        status : 'S'
      }, ]
    };
    this.filterItem = {
      showAll : this.filterOptions.options
    }
    
   
  }
  getSmsCount(){
    this.loadingService.showLoading();
    this.announcementService.getSmsCount().then((data:any)=>{
      this.smsCount = data;
    })
    this.loadingService.hideLoading();
    }

    getSenTSms(time){
      this.loadingService.showLoading();
      let query = '?filter=sDate eq'+ time +'&start=0&count=25&order=des&sort=_id';
      this.announcementService.getSentSms(query).then((data:any)=>{
        this.sentSms = data;

      
   
      })
      this.loadingService.hideLoading();
      }

      getDayCount(test){
       
var milliseconds = test.getTime().valueOf().toString();
this.time=milliseconds;
this.loadingService.showLoading();
this.announcementService.getDayCount(milliseconds).then((data:any)=>{
  this.dayCount = data;
})
this.getSenTSms(this.time);
this.loadingService.hideLoading();
      }

      getList(test,status){
      
        var milliseconds = test.getTime().valueOf().toString();
       
       
   if(status== undefined){
    this.announcementService.showAll(milliseconds).then((data:any)=>{
      this.dayCount = data;
    this.getDaySmsCount(milliseconds)
    })
    
  }else{
    this.announcementService.filterSms(status,milliseconds).then((data:any)=>{
      this.sentSms = data;
      this.getDaySmsCount(milliseconds)
    })
      
  }

    
  }

getDaySmsCount(milliseconds){
  this.announcementService.getDayCount(milliseconds).then((data:any)=>{
    this.dayCounts = data;
  //  this.getDayCount(milliseconds)
}) 
}

}
