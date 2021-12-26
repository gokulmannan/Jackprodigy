
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Regulation } from '../_models/regulation';
import { RegulationProvider } from '../_provider/regulation.provider';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class RegulationService {

  public regulation: Regulation[];

  constructor(private regulationProvider: RegulationProvider) {

  }


  list(id) {

    return new Promise((resolve, reject) => {
      this.regulationProvider.list(id).subscribe(
        (data: any[]) => {
          this.regulation = data
          resolve(this.regulation);
        },
        error => console.log("Error :: " + error)
      )
    });
  }

  create(regSubject) {
    this.regulationProvider.create(regSubject).subscribe(
      (data: any[]) => { },
      error => console.log("Error :: " + error)
    )
  }

  update(editReg) {
    this.regulationProvider.update(editReg).subscribe(
      (data: any[]) => { },
      error => console.log("Error :: " + error)
    )
  }
  delete(id: String): void {

    this.regulationProvider.delete(id).subscribe();

  }

  getRegSub(deptId: string, regulation: string, semester: string) {

    return new Promise((resolve, reject) => {
      this.regulationProvider.getRegSubjects(deptId, regulation, semester).subscribe(
        (data: any[]) => {
          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }


}
