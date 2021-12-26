import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Application } from '../../_models/Application';
import { ApplicationService } from '../../_services/application.service';
import { UserService } from '../../_services/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-all-applications',
  templateUrl: './all-applications.component.html',
  styleUrls: ['./all-applications.component.css'],
  providers: [DatePipe]
})
export class AllApplicationsComponent implements OnInit {
  public allApplications;
  public displayedColumns: string[] = ['#', 'name', 'applicationSubmittedOn', 'applicationFees', 'action'];
  public applications: Application[];
  private currentUser: any;
  constructor(private applicationService: ApplicationService,
    private router: Router,
    private userService: UserService,
    private loadingService: LoadingAlertService,
    public datepipe: DatePipe) { }

  ngOnInit() {
    this.userService.getcurrentUser().then((data) => {
      this.currentUser = data;
      this.getAllApplications();
    })

  }

  getAllApplications() {
    this.loadingService.showLoading();
    this.applicationService.getAllApplications().then((data: any[]) => {
      this.applications = data;
      this.allApplications = data;
      this.userService.getUserById(this.currentUser.userId).then((data: any) => {
        if (data.appliedApplication != undefined) {
          data.appliedApplication.forEach(eachAppliedApplication => {
            this.allApplications.forEach(element => {
              if (eachAppliedApplication.applicationId == element.id) {
                element.appliedStatus = "APPLIED";
                var date = new Date(eachAppliedApplication.appliedOn);
                let latest_date = this.datepipe.transform(date, 'dd-MM-yyyy');
                element.applicationSubmittedOn = latest_date;
              }
            });
          });
        }
        this.loadingService.hideLoading();
      })
     
    });

  }
  applynow(applicationDetails) {
    this.loadingService.showLoading();
    this.userService.updateUserWithApplication(this.currentUser.userId, applicationDetails.id).then((data: any) => {
      this.getAllApplications();
      this.loadingService.hideLoading();
    })
  }

  applyFilter(filterValue: string) {
    this.allApplications.filter = filterValue.trim().toLowerCase();
  }
}
