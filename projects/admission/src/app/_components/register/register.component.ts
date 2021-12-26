import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../_services/user.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { User } from '../../_models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  countryCode = 91;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private userService: UserService,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }
  register() {
    if (this.registerForm.invalid) {
      return;
    }
    this.loadingService.showLoading();
    this.userService.register(this.registerForm.value).then((data: User) => {
      this.loadingService.hideLoading();
      // this.router.navigate(['/login']);
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
