import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalDataService {
    mean_token: string = "";
    idleStage:boolean=false;
    sessionTimedout:boolean=false;
    sessionTimeCount:number;
    idleStageMessage:string="You There????";
    sessionTimedoutMessage:string="Session Timed out !!Please login again.";
    

}
