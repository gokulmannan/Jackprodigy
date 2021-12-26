import { Component, OnInit } from '@angular/core';
import { Application } from '../../_models/Application';
import { ApplicationService } from '../../_services/application.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public applications: Application[];
  constructor(private applicationService: ApplicationService,
    // private authService: AuthService
    ) { }

  ngOnInit() {
    this.getAllApplications();
  }

  getAllApplications() {
    this.applicationService.getAllApplications().then((data: Application[]) => {
      this.applications = data;
    });
  }
  logout() {
    //this.authService.logout()
  }

}
