import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LoadingAlertService {
    isSidebarVisible: boolean;
    private subject = new Subject<any>();

    showLoading(message: boolean=true) {
        this.subject.next({message});
    }
    hideLoading(message: boolean =false) {
        this.subject.next({message});
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

  
}