import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from '../../../_services/application.service';
import { CourseService } from '../../../_services/course.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
  id: string;
  registerForm: FormGroup;
  submitted = false;
  countryCode = 91;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService,
    private userService: UserService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],

    });
    //  this.id = this.route.snapshot.paramMap.get('id');
    //   this.getApplications();
  }
  getApplications() {
  }
  get f() { return this.registerForm.controls; }
  register() {
    if (this.registerForm.invalid) {
      return;
    }
    this.loadingService.showLoading();
    this.userService.registerUser(this.registerForm.value).then((data: any) => {
      this.loadingService.hideLoading();
      this.router.navigate(['/admission/application-form/', data.id]);
      this.toastr.success("Sucessfully Registered")
    });

  }
  getNumber(evnet) {
    this.countryCode = evnet.dialCode;
  }
  telInputObject(obj) {
    obj.setCountry('in');
  }

}
