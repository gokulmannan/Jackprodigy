import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateApplicationComponent } from '../create-application/create-application.component';
import { Router } from '@angular/router';
import { FormBuilderTool } from '../../../_models/formBuilderTool';
import { ApplicationService } from '../../../_services/application.service';
import { CourseService } from '../../../_services/course.service';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dataSource;
  data;
  displayedColumns: string[] = ['index', 'name', 'fees', 'rule'];
  allCourses: any = [];

  constructor(private router: Router,
    private formBuilder: FormBuilderTool,
    private applicationService: ApplicationService,
    private activeModel: NgbModal,
    private courseService: CourseService) { }

  ngOnInit() {
    this.getApplications();
    this.getCourses();
  }

  getApplications() {
    this.applicationService.getAllApplications().then((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  getCourses() {
    this.courseService.getAllCourses().then((data: any[]) => {
      this.allCourses = data;
    })
  }


  edit(id) {
    this.router.navigate(['/admission/admin/application-forms/edit-form', id.id]);
  }
  delete(data) {
    this.applicationService.deleteApplication(data.id).then((datas: any) => {
      this.getApplications();
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openCreateForm() {
    this.router.navigate(['/admission/admin/application-forms/new-form']);
  }
  viewApplication(id) {
    this.router.navigate(['/admission/admin/application-view/' + id]);
  }
  openNewApplication(applicationDetails) {
    this.router.navigate(['/admission/admin/new-form/' + applicationDetails.id]);
  }

}
