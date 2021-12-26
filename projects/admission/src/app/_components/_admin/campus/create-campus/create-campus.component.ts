import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CampusService } from 'projects/admission/src/app/_services/campus.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';

@Component({
  selector: 'app-create-campus',
  templateUrl: './create-campus.component.html',
  styleUrls: ['./create-campus.component.css']
})
export class CreateCampusComponent implements OnInit {
  newCampusForm: FormGroup;
  @Input() campusId: any;
  campus: any;
  submitted = false;
  id: string;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private campusService: CampusService,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.newCampusForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    if (this.campusId != null) {
      this.campusService.getById(this.campusId).then((data: any) => {
        this.newCampusForm = this.formBuilder.group({
          name: [data.name, Validators.required],
        });
      });
    }
  }
  createNewCampus() {
    if (this.newCampusForm.invalid) {
      return;
    }
    this.campus = this.newCampusForm.value;
    if (this.campusId != null) {
      this.loadingService.showLoading();
      this.campusService.updateCampus(this.campusId, this.campus).then((data: any) => {
        this.activeModal.close();
        this.loadingService.hideLoading();
        this.toastr.success('Sucessfully Updated')

      });
    } else {
      this.loadingService.showLoading();
      this.campusService.createCampus(this.campus).then((data: any) => {
        this.activeModal.close();
        this.loadingService.hideLoading();
        this.toastr.success('Sucessfully Created')
      });
    }
  }
}
