import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpUrls } from 'src/app/common/common.constants';
import * as $ from "jquery";
import { DomSanitizer } from '@angular/platform-browser';
interface TokenResponse {
  token: string;
}
export interface TokenPayload {
  email: string;
  password: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private httpUrls: HttpUrls,private sanitizer: DomSanitizer) { }
  registrationFormData: TokenPayload;
  private token: string;
  checkForExistence: boolean = false;
  alreadyExists: boolean = false;
  alertMessage: any;
  onSubmitUserDetails(formvalue) {
    this.checkUser({ "email": formvalue.emailID }).subscribe((data) => {
      data == 1 ? this.checkForExistence = true : this.checkForExistence = false;
      if (!this.checkForExistence) {
        this.registrationFormData = formvalue
        console.warn(formvalue)
        this.getRegisterLink(this.registrationFormData).subscribe((data) => {
          console.warn("inside 1", data);
        }, (err) => {
          console.error(err);
        });
      } else {
        //already exists
        this.alertMessage = "<strong>"+formvalue.emailID+"</strong> "+":Already in use!"+"<br>"+"Somebody already has that email address.   Try another? "
        this.alertMessage=this.sanitizer.bypassSecurityTrustHtml(this.alertMessage)
        this.triggerAlertBox();
      }
    })
  }

  getRegisterLink(registrationData: TokenPayload): Observable<any> {
    return this.http.post(`${this.httpUrls.registerURL}`, registrationData).pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
  }
  checkUser(emailID): Observable<any> {
    return this.http.post(`${this.httpUrls.checkRegisterURL}`, emailID).pipe(map(data => data))
  }
  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }
  triggerAlertBox() {
    this.alreadyExists = !this.alreadyExists;
    $('#middleSection,#header').not('#popup_window').css({ "opacity": 0.2 ,"pointer-events":'none'})
  }
  reset(){
    this.alreadyExists=!this.alreadyExists;
    $('#middleSection,#header').css({ "opacity": 1 ,"pointer-events":'auto'})
  }
}
