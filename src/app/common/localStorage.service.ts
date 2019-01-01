import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalDataService {
    mean_token: string = "";
    idleStage:boolean=false;
    sessionTimedout:boolean=false;
    sessionTimeCount:number;
    idleStageImage:boolean=false;

    

}
