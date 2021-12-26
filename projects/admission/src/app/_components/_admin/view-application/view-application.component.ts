import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { Application } from '../../../_models/Application';
import { ApplicationService } from '../../../_services/application.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {
  private id: string;
  public application: Application = new Application();
  public isView: boolean;
  constructor(private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private router: Router,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.isView = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadingService.showLoading();
    this.applicationService.getById(this.id).then((data: any) => {
      this.application = data;
      this.loadingService.hideLoading();
    });
  }
  edit() {
    this.isView = false;
    this.router.navigate(['/admission/admin/application-edit/', this.id]);
  }
  delete() {
    this.loadingService.showLoading();
    this.applicationService.deleteApplication(this.id).then((data: any) => {
      this.loadingService.hideLoading();
      this.router.navigate(['/admission/admin']);
      this.toastr.success("Sucessfully Deleted")
    });
  }

}
