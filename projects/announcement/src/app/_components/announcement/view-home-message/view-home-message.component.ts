import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { AnnouncementService } from '../../../_services/announcement.service';


@Component({
  selector: 'app-view-home-message',
  templateUrl: './view-home-message.component.html',
  styleUrls: ['./view-home-message.component.css']
})
export class ViewHomeMessageComponent implements OnInit {
  @Input() value;
  constructor(public activeModal: NgbActiveModal,
    private announcementService : AnnouncementService,
                private modalService: NgbModal,
           
                private loadingService : LoadingAlertService) { }

  ngOnInit(): void {
  }

}
