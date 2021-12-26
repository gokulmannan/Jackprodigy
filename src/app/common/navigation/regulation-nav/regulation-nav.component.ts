import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Regulation } from 'projects/regulation/_models/regulation';
import { RegulationProvider } from 'projects/regulation/_provider/regulation.provider';
import { RegulationService } from 'projects/regulation/_service/regulation.service';


@Component({
  selector: 'app-regulation-nav',
  templateUrl: './regulation-nav.component.html',
  styleUrls: ['./regulation-nav.component.css']
})
export class RegulationNavComponent implements OnInit {

  public nav : any;
  regulation:any='';
  public regulations : Regulation [];
  @Output('regnav') regNav=new EventEmitter();
 constructor(private regulationService:RegulationService, private regulationProvider:RegulationProvider) {
   
  }

  ngOnInit() {
    this.regulation=null;
  }

  onSelect(event)
{
  this.nav.regulation = event;
  this.regNav.emit(this.nav);
}
  loadAccData(event)
  { 
    this.nav = event;
    this.regulationService.list(this.nav.department.id).then((data:any)=>{
      this.regulations = data.datas;
    });
    
    //console.log(this.regulation)
  }

  localSem(event){
    console.log(event)
  }
}
