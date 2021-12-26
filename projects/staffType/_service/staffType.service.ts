import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StaffTypeProvider } from '../_provider/staffType.provider';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',

    })
};
@Injectable({ providedIn: 'root' })
export class StaffTypeService {
    public passedValue;
    public venue: any[];
    public availability: any;
    public renameValue: any;
    public currentId: any;
    constructor(private staffTypeProvider: StaffTypeProvider) {

    }
    getAllStaffType() {
        return new Promise((resolve, reject) => {
            this.staffTypeProvider.getAllStaffType().subscribe((data: any[]) => {
                    resolve(data);
                },
                error => console.log("Error :: " + error)
            )
        });
    }
    

}