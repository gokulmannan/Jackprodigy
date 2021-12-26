import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccyearService } from 'projects/academicYear/_service/accyear.service';
import { Accyear } from 'projects/academicYear/_models/accyear';

@Component({
  selector: 'app-accyear-nav',
  templateUrl: './accyear-nav.component.html',
  styleUrls: ['./accyear-nav.component.css']
})
export class AccyearNavComponent implements OnInit {
  public nav :any=[];
  public accyear:any='';
  public accyears : Accyear [];
  @Output('accyearnav') accyearnav = new EventEmitter();
  constructor(private accyearService:AccyearService) { }

  ngOnInit() {
    
  }
  onSelect(accyear)
{
  this.nav.accyear = accyear;
  this.accyearnav.emit(this.nav);
}
  
  loadAccData(event)
  {
    this.nav = event;
        this.accyearService.list(this.nav.department.id).then((data:any)=>{
      this.accyears = data;
     
    });
    
  }
}
