import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { UserProvider } from 'projects/user/_provider/user.provider';
import { FileUploadProvider } from '../provider/file-upload.provider';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',

    })
};
@Injectable({ providedIn: 'root' })
export class FileUploadService {

    currentUser: any;
    constructor(private fileUploadProvider: FileUploadProvider,
        private cookieService: CookieService,
        private userProvider: UserProvider) {
        this.currentUser = this.cookieService.getObject("currentUser");

    }

    uploadAttachment(fileToUpload) {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return new Promise((resolve, reject) => {
            this.fileUploadProvider.fileUpload(formData).subscribe((data) => {
                resolve(data);
            },
                error => console.log("Error :: " + error));
        });
    }
    putAttachment(fileToUpload, oldversionId, oldFileName) {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return new Promise((resolve, reject) => {
            this.fileUploadProvider.fileUpdate(formData, oldversionId, oldFileName).subscribe((data) => {
                resolve(data);
            },
                error => console.log("Error :: " + error));
        });
    }

    deleteFile(versionId, fileKey) {
        return new Promise((resolve, reject) => {
            this.fileUploadProvider.deleteFile(versionId, fileKey).subscribe((data: any) => {
                resolve(data);
            },
                error => console.log("Error :: " + error)
            )
        });
    }
}