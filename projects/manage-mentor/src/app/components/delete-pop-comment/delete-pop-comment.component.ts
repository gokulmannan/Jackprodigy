import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { manageMentorService } from '../../service/manageMentor.service';

@Component({
  selector: 'app-delete-pop-comment',
  templateUrl: './delete-pop-comment.component.html',
  styleUrls: ['./delete-pop-comment.component.css']
})
export class DeletePopCommentComponent implements OnInit {
  @Input() deleteData: any;
  deleeted: any;
  constructor(private ManageMentorService:manageMentorService,
    private loadingService : LoadingAlertService,
    config: NgbModalConfig ,
    public activeModal: NgbActiveModal,
    private toastr:ToastrService) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit(): void {
    this.deleteData
  }
  deleteComment() {
    this.ManageMentorService.deleteComent(this.deleteData.id).then((data: any) => {
        this.loadingService.showLoading();
        this.deleeted=data;
        this.toastr.success("Deleted Successfully");
        this.activeModal.close()
        this.loadingService.hideLoading();
    })
  }
}
