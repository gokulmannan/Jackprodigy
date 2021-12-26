import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Accyear } from '../_models/accyear';
import { AccyearProvider } from '../_provider/accyear.provider';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class AccyearService {

  public accyear: Accyear[];

  constructor(private accyearProvider: AccyearProvider) {

  }


  list(id) {

    return new Promise((resolve, reject) => {
      this.accyearProvider.list(id).subscribe(
        (data: any[]) => {
          this.accyear = data
          resolve(this.accyear);
        },
        error => console.log("Error :: " + error)
      )
    });
  }
}