import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SubjectrService } from 'projects/subject/_service/subject.service';
import { Subject } from '../../../../../projects/subject/_models/subject';


@Component({
  selector: 'app-subject-nav',
  templateUrl: './subject-nav.component.html',
  styleUrls: ['./subject-nav.component.css']
})
export class SubjectNavComponent implements OnInit {
  public nav: any = [];
  public subjectreport: Subject[];
  @Output('staffnav') staffnav = new EventEmitter();
  constructor(private subjectreportService: SubjectrService) { }

  ngOnInit() {
  }

  // onSelect(staff) {
  //   this.nav.staff = staff;
  //   this.staffnav.emit(this.nav);
  // }

  // loadSubjectData(event) {
  //   this.nav = event;
  //   this.subjectreportService.list(this.nav.staff.id).then((data: any) => {
  //     this.subjectreport = data;
  //     console.log(this.nav.staff.id);
  //   });

  // }
}
