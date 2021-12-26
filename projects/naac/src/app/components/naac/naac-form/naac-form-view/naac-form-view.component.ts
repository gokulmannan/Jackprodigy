import { KeyValue } from '@angular/common';
import { Component, NgModuleRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { CommentPopupComponent } from 'projects/comment/src/app/components/comment-popup/comment-popup.component';
import { CommentService } from 'projects/comment/src/app/_services/comment.service';
import { NaacService } from 'projects/SharedProviderAndService/Naac-serviceAndProvider/naac-service.service';
 import { ConfirmationPopupService } from 'src/app/common/service/confirmation-popup.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-naac-form-view',
  templateUrl: './naac-form-view.component.html',
  styleUrls: ['./naac-form-view.component.css']
})
export class NaacFormViewComponent implements OnInit {
  naacId: any;
  facultyId: any;
  naacs: any;
  naacRole: any;
  confirmClicked = false;
  cancelClicked = false;
  facultyDeptId: any;
  comments: any;
  criteria: string;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private naacService: NaacService,
    private toastr: ToastrService,
    private loadingService: LoadingAlertService,
    private conformationPopupService: ConfirmationPopupService,
    private modalService: NgbModal,
    private commentService: CommentService) {
    this.facultyId = this.activatedRoute.snapshot.paramMap.get("facultyId");
    this.naacId = this.activatedRoute.snapshot.paramMap.get("naacId");
    this.facultyDeptId = this.activatedRoute.snapshot.paramMap.get("facultyDeptId");
    this.criteria = this.activatedRoute.snapshot.paramMap.get("criteria");
    this.naacs = {};
    this.naacRole = {};
    this.comments = [];
    this.getNaacByIdWithLabel();
    this.getRole();
    this.getComments();
  }

  ngOnInit(): void {
  }
  getComments() {
    this.loadingService.showLoading();
    this.commentService.getComments(this.naacId).then((data: any) => {
      this.comments = data;
      this.loadingService.hideLoading();
    })
  }
  openConfirmationDialog(status) {
    var action = "UNAPPROVE"
    if (status == "APPROVED") {
      action = "APPROVE"
    }
    this.conformationPopupService.confirm('Confirmation', 'Do you really want to ' + action + '... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.approval(status)
        }
      });
  }
  getNaacByIdWithLabel() {
    this.loadingService.showLoading();
    this.naacService.getNaacByIdWithLabel(this.naacId).then((data: any) => {
      this.naacs = data;
      this.loadingService.hideLoading();
    });
  }
  getRole() {
    this.loadingService.showLoading();
    this.naacService.getCurrentUserNaacRole(this.facultyDeptId).then((data: any) => {
      this.naacRole = data;
      this.loadingService.hideLoading();
    });
  }
  openEditPage() {
    this.router.navigate(['/naac/form-edit', this.naacId, this.facultyId,this.criteria])
  }
  goBack() {
    this.router.navigate(['/naac/submitted', this.naacs.facultyDeptId, this.naacs.naacTemplateId, this.facultyId,this.criteria])
  }
  approval(status) {
    this.naacs.status = status;
    this.naacService.updateNaac(this.naacs).then((data: any) => {
      this.loadingService.hideLoading();
      this.toastr.success(status + "   succesfully");
    });
  }
  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }
  openCommentPopup() {
    const modalRef = this.modalService.open(CommentPopupComponent);
    modalRef.componentInstance.referenceId = this.naacs.id;
    modalRef.componentInstance.facultyDeptId = this.facultyDeptId;
    modalRef.result.then(() => {
      this.getComments();

    })
  }

}
