import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpUrls {
    //registration urls
    registerURL = `${environment.url}/zeitleiste/register`;
    checkRegisterURL = `${environment.url}/zeitleiste/checkRegister`;
    //login urls
    loginURL=`${environment.url}/zeitleiste/login`;
    //avatar urls
    avatarExists=`${environment.url}/zeitleiste/avatarExists`;
    avatarData=`${environment.url}/zeitleiste/avatarData`;

}
