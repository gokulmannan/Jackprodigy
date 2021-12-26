import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  currentUser: any;
  user: any;
  invalidCurrentPassword: boolean;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordConfirming });
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.loadingService.showLoading();
    this.userService.getcurrentUser().then((data: any) => {
      this.currentUser = data;
      this.loadingService.hideLoading();
      this.getUser();
    })
  }
  getUser() {
    this.loadingService.showLoading();
    this.userService.getUserById(this.currentUser.id).then((data: any) => {
      this.user = data;
      this.loadingService.hideLoading();
    })
  }
  changePassword() {
    this.invalidCurrentPassword = false;
    if (this.changePasswordForm.valid) {
      if (this.changePasswordForm.value.currentPassword == this.user.password) {
        this.user.password = this.changePasswordForm.value.newPassword;
        this.loadingService.showLoading();
        this.userService.updateUser(this.currentUser.id, this.user).then((data: any) => {
          this.loadingService.hideLoading();
          this.router.navigate(['/admission/profile']);
          this.toastr.success("Sucessfully Updated")

        })
      } else {
        this.invalidCurrentPassword = true;
      }
    }
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('newPassword').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }
}
