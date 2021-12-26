import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationService } from 'src/app/common/service/navigation.service';

@Component({
  selector: 'app-subject-nav-by-regulation',
  templateUrl: './subject-nav-by-regulation.component.html',
  styleUrls: ['./subject-nav-by-regulation.component.css']
})
export class SubjectNavByRegulationComponent implements OnInit {
public subject: any;
public eachSubject:any='';
public subjects:any;
public nav :any;
  constructor(private navigationService:NavigationService) { }
  @Output ('subjectByRegulationNav') subjectByRegulationNav = new EventEmitter();
  ngOnInit() {
    this.eachSubject=null;
  }
  loadSemData(event){
    this.nav = event;
    this.navigationService.getSubjectsByRegulation(this.nav.regulation.id).then((data:any)=>{
      this.subjects = data.datas;
    });
    
  }
  onSubjectSelect(event){
    this.nav.subject = event;
    this.subjectByRegulationNav.emit(this.nav);
  }


}
