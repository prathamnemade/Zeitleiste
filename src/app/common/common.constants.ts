import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class HttpUrls {
    //registration urls
    registerURL = `${environment.url}/zeitleiste/register`;
    checkRegisterURL = `${environment.url}/zeitleiste/checkRegister`;
    //login urls
    loginURL=`${environment.url}/zeitleiste/login`;
}
