import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Group } from 'projects/group/_models/group';
import { GroupService } from 'projects/group/_service/group.service';






@Component({
  selector: 'app-group-nav',
  templateUrl: './group-nav.component.html',
  styleUrls: ['./group-nav.component.css']
})
export class GroupNavComponent implements OnInit {

  public nav :any=[];
  public group : Group[];
  groups:any='';
  @Output ('groupnav') groupn = new EventEmitter();
  constructor(private groupService:GroupService) { }

  ngOnInit() {
    
  }
  onSelect(event)
{
  this.nav.group = event;
  this.groupn.emit(this.nav);
}
  
  loadAccData(event)
  {
    this.nav = event;
   // const mapped = Object.keys(event).map(key => ({type: key, value: event[key]}));
  //  console.log(mapped[1].value)
 
       this.groupService.list(this.nav.accyear.id).then((data:any)=>{
      this.group = data;
      //console.log(data)
    });
    
  }
}
