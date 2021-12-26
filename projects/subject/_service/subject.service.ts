import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectProvider } from '../_provider/subject.provider';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable({ providedIn: 'root' })
export class SubjectrService {
  constructor(private subjectreportProvider: SubjectProvider) {

  }


  list(id) {

    return new Promise((resolve, reject) => {
      this.subjectreportProvider.list(id).subscribe(
        (data: any[]) => {
          resolve(data);
        },
        error => console.log("Error :: " + error)
      )
    });
  }


}