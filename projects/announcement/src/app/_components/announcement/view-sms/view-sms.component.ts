import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../../../_services/announcement.service';

@Component({
  selector: 'app-view-sms',
  templateUrl: './view-sms.component.html',
  styleUrls: ['./view-sms.component.css']
})
export class ViewSmsComponent implements OnInit {
announcementId:any;
announcement:any;
mgrLogo:String='src/assets/mgr.png';
  randomData: any;

  constructor(private activatedRoute :ActivatedRoute,
              private announcementService :AnnouncementService,
              ) { 
    this.announcementId = this.activatedRoute.snapshot.paramMap.get("id");
    this.announcement ={};
      this.getRandomKey();
  }

  ngOnInit(): void {
  }

  getRandomKey(){
    this.announcementService.getRandomKey(this.announcementId).then((data:any)=>{
      this.announcement = data;
    })
}
// getAnnouncement(){
//     this.announcementService.getAnnouncementById(this.announcementId).then((data:any)=>{
//       this.announcement = data;
//     })
// }
}
