import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpUrls } from 'src/app/common/common.constants';
import * as $ from "jquery";
import { DomSanitizer } from '@angular/platform-browser';
import { LocalDataService } from 'src/app/common/localStorage.service';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    errorMessage: String;
    errorMessageTrigger: boolean = false;
    constructor(private router: Router,private localDataService: LocalDataService, private http: HttpClient, private httpUrls: HttpUrls, private sanitizer: DomSanitizer) { }
    onLogin(formData) {
        this.checkUser(formData).subscribe(
            (data) => {
                this.localDataService.mean_token = data.token
                localStorage.setItem('mean_token', data.token)
                this.router.navigateByUrl('/dashboard', { skipLocationChange:false});

            },
            (err) => {
                this.errorMessage = err.error.message;
                this.triggerErrorBox()
            });
    }
    checkUser(data): Observable<any> {
        return this.http.post(`${this.httpUrls.loginURL}`, data).pipe(map(data => data))
    }
    triggerErrorBox() {
        this.errorMessageTrigger = !this.errorMessageTrigger;
        $('#middleSection,#header').not('#popup_window').css({ "opacity": 0.2, "pointer-events": 'none' })
    }
    reset() {
        this.errorMessageTrigger = !this.errorMessageTrigger;
        $('#middleSection,#header').css({ "opacity": 1, "pointer-events": 'auto' })
    }
}
