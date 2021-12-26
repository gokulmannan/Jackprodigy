import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnnouncementService } from 'projects/announcement/src/app/_services/announcement.service';

@Component({
  selector: 'app-view-receivers-popup',
  templateUrl: './view-receivers-popup.component.html',
  styleUrls: ['./view-receivers-popup.component.css']
})
export class ViewReceiversPopupComponent implements OnInit {
@Input() userData:any;

  constructor(private announcementService : AnnouncementService,
              private modalService: NgbModal,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

  }


}
