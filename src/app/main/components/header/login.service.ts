import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpUrls } from 'src/app/common/common.constants';
import * as $ from "jquery";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private httpUrls: HttpUrls, private sanitizer: DomSanitizer) { }
    onLogin(formData) {
        console.warn("adasdsadsaf",formData);
        
        this.checkUser(formData).subscribe((data) => console.warn("loginnnnnn", data));
    }
    checkUser(data): Observable<any> {
        return this.http.post(`${this.httpUrls.loginURL}`, data).pipe(map(data => data))
    }
}
