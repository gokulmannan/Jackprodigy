import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { Application } from '../../../_models/Application';
import { ApplicationService } from '../../../_services/application.service';
import { CourseService } from '../../../_services/course.service';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {

  newApplicationForm: FormGroup;
  application: Application;
  submitted = false;
  id: string;
  eligibilityRule;
  courses: any;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.newApplicationForm = this.formBuilder.group({
      name: ['', Validators.required],
      fees: ['', Validators.required]
    });
    this.eligibilityRule = new FormControl();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.applicationService.getById(this.id).then((data: any) => {
        this.newApplicationForm = this.formBuilder.group({
          name: [data.name, Validators.required],
          fees: [data.fees, Validators.required]
        });
        this.eligibilityRule = new FormControl(data.rule);
      });
    }
    this.getCourse();
  }
  getCourse() {
    this.loadingService.showLoading();
    this.courseService.getAllCourses().then((data: any) => {
      this.courses = data;
      this.loadingService.hideLoading();
    })
  }
  createNewApplication() {
    if (this.newApplicationForm.invalid) {
      return;
    }
    if (this.eligibilityRule.value == null) {
      return;
    }
    this.application = this.newApplicationForm.value;
    this.application.rule = this.eligibilityRule.value;
    if (this.id != null) {
      this.loadingService.showLoading();
      this.applicationService.updateApplication(this.id, this.application).then((data: Application) => {
        this.loadingService.hideLoading();
        this.router.navigate(['/admission/admin']);
        this.toastr.success("Sucessfully Updated")
      });
    } else {
      this.loadingService.showLoading();
      this.applicationService.createApplication(this.application).then((data: Application) => {
        this.loadingService.hideLoading();
        this.router.navigate(['/admission/admin']);
        this.toastr.success("Sucessfully Created")
      });
    }
  }

}
