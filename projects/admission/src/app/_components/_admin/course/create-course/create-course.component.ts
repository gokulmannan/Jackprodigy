import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'projects/admission/src/app/_services/course.service';
import { LoadingAlertService } from 'src/app/common/service/loadingAlert.service';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  newCourseForm: FormGroup;
  @Input() courseId: any;
  course: any;
  submitted = false;
  id: string;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal,
    private loadingService: LoadingAlertService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.newCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    if (this.courseId != null) {
      this.courseService.getById(this.courseId).then((data: any) => {
        this.newCourseForm = this.formBuilder.group({
          name: [data.name, Validators.required],
        });
      });
    }
  }
  createNewCourse() {
    if (this.newCourseForm.invalid) {
      return;
    }
    this.course = this.newCourseForm.value;
    if (this.courseId != null) {
      this.loadingService.showLoading();
      this.courseService.updateCourse(this.courseId, this.course).then((data: any) => {
        this.activeModal.close();
        this.loadingService.hideLoading();
        this.toastr.success('Sucessfully Updated')

      });
    } else {
      this.loadingService.showLoading();
      this.courseService.createCourse(this.course).then((data: any) => {
        this.activeModal.close();
        this.loadingService.hideLoading();
        this.toastr.success('Sucessfully Created')
      });
    }
  }
}

