import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'selenium-webdriver';
import { resolve, reject } from 'q';
import { FacultyDepartmentProvider } from '../_provider/facultyDepartment.provider';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',

    })
};
@Injectable({ providedIn: 'root' })
export class FacultyDepartmentService {
    public passedValue;
    public venue: any[];
    public availability: any;
    public renameValue: any;
    public currentId: any;
    constructor(private facultyDepartmentProvider: FacultyDepartmentProvider) {

    }
    getAllFacultyDepartments() {
        return new Promise((resolve, reject) => {
            this.facultyDepartmentProvider.getAllFacultyDepartments().subscribe((data: any[]) => {
                    resolve(data);
                },
                error => console.log("Error :: " + error)
            )
        });
    }


}