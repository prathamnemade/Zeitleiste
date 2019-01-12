import { Injectable ,OnInit} from '@angular/core';
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
export class AvatarService implements OnInit{
    data:any;
    emailId:string;
    constructor(private router: Router, private localDataService: LocalDataService, private http: HttpClient, private httpUrls: HttpUrls, private sanitizer: DomSanitizer) { 
        console.warn("11");
        
        this.emailId=localStorage.getItem('emailId')
        this.getDataByEmailId()
    }
    ngOnInit(){
        

    }  
    getDataByEmailId() {
        this.http.post(`${this.httpUrls.avatarData}`, {"email":this.emailId}).pipe(map(data => data)).subscribe((data) =>  this.data= data )
    }

}
