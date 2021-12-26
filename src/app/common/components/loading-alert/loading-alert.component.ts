import { Component, OnInit } from '@angular/core';
import { LoadingAlertService } from '../../service/loadingAlert.service';

@Component({
  selector: 'loading-alert',
  templateUrl: './loading-alert.component.html',
  styleUrls: ['./loading-alert.component.css']
})
export class LoadingAlertComponent implements OnInit {
  public  loading: boolean;
  constructor(private loadingAlertService : LoadingAlertService) {       
     this.loadingAlertService.getMessage().subscribe(message => { 
       this.loading = message.message;
        });

  }

  ngOnInit(): void {
  }
 

}
