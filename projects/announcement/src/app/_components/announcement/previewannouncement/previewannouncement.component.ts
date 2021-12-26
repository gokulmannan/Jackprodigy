import { Component, Input, OnInit } from '@angular/core';
import { SelectMembersService } from '../../../_services/selectMembers.service';

@Component({
  selector: 'app-previewannouncement',
  templateUrl: './previewannouncement.component.html',
  styleUrls: ['./previewannouncement.component.css']
})
export class PreviewannouncementComponent implements OnInit {
  announcement:any;

  constructor(private selectMembersService :SelectMembersService) { }
  ngOnInit() {
    this.announcement ={};
    this.announcementData()
  }
announcementData():any{
  this.announcement = this.selectMembersService.announcementData;
}  
}
