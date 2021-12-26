import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { ApplicationService } from '../../../_services/application.service';
import { UserService } from '../../../_services/user.service';
import { ApplyApplicationPopupComponent } from './apply-application-popup/apply-application-popup.component';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  public displayedColumns: string[] = ['index', 'name', 'email', 'mobile', 'profileComplete', 'appliedApplication'];
  constructor(private userService: UserService,
    private loadingService: LoadingAlertService,
    private router: Router,
    private modalService: NgbModal,
    private applicationService: ApplicationService) { }
  public allApplications;
  applications: any;
  ngOnInit() {
    this.getAllApplications();
    this.getAllApplicationForms();
  }
  getAllApplications() {
    this.loadingService.showLoading();
    this.userService.getAllUsers().then((data: any) => {
      this.allApplications = data;
      this.loadingService.hideLoading();
    })
  }
  getAllApplicationForms() {
    this.applicationService.getAllApplications().then((data: any) => {
      this.applications = data;
    })
  }
  applyFilter(filterValue: string) {
    this.allApplications.filter = filterValue.trim().toLowerCase();
  }

  apply(applicationDetails) {
    const modalRef = this.modalService.open(ApplyApplicationPopupComponent);
    modalRef.componentInstance.allApplications = this.applications;
    modalRef.result.then((selectedApplication) => {
      this.userService.updateUserWithApplication(applicationDetails.id, selectedApplication.id).then((data: any) => {
        this.getAllApplications();
      })
    });
  }

  openNewApplication() {
    this.router.navigate(['/admission/admin/new-form/']);
  }

}
